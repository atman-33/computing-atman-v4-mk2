import { NotFoundException, Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FilterQuery, Model } from 'mongoose';
import { AbstractDocument } from '../database/abstract.schema';
import { AbstractModel } from '../model/abstract.model';
import { ConnectionArgs } from './connection-args.dto';
import { ConnectionQueryArgs } from './connection-query-args.dto';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ConnectionModel<T extends AbstractModel>(genericClass: Type<T>): Type<IConnection> {
  @ObjectType(`${genericClass.name}PageInfo`, { isAbstract: true })
  class PageInfo {
    @Field(() => Boolean, { nullable: false })
    hasNextPage!: boolean;

    @Field(() => Boolean, { nullable: false })
    hasPreviousPage!: boolean;

    @Field(() => String, { nullable: true })
    startCursor!: string;

    @Field(() => String, { nullable: true })
    endCursor!: string;
  }

  @ObjectType(`${genericClass.name}Edge`, { isAbstract: true })
  class Edge<T> {
    @Field(() => String, { nullable: false })
    cursor!: string;

    @Field(() => genericClass, { nullable: false })
    node!: T;
  }

  @ObjectType({ isAbstract: true })
  class Connection implements IConnection {
    @Field(() => [genericClass], { nullable: false })
    nodes!: T[];

    @Field(() => [Edge], { nullable: false })
    edges!: Edge<T>[];

    @Field(() => PageInfo, { nullable: false })
    pageInfo!: PageInfo;

    @Field(() => Int, { nullable: false })
    totalCount!: number;

    async loadConnection<TDocument extends AbstractDocument>(
      queryArgs: ConnectionQueryArgs,
      model: Model<TDocument>
    ): Promise<void> {
      const { query } = queryArgs;

      let filterQuery: FilterQuery<AbstractDocument> = {};

      if (query) {
        filterQuery = {
          ...filterQuery,
          $text: { $search: query }
        };
      }

      const args: ConnectionArgs = { ...queryArgs };
      await this.executeConnectionQuery(args, model, filterQuery);
    }

    async loadConnectionByFilterQuery<TDocument extends AbstractDocument>(
      args: ConnectionArgs,
      model: Model<TDocument>,
      filterQuery: FilterQuery<AbstractDocument>
    ): Promise<void> {
      await this.executeConnectionQuery(args, model, filterQuery);
    }

    private async executeConnectionQuery<TDocument extends AbstractDocument>(
      args: ConnectionQueryArgs,
      model: Model<TDocument>,
      filterQuery: FilterQuery<AbstractDocument>
    ): Promise<void> {
      const { first, after, last, before } = args;

      const countQuery = model.countDocuments(filterQuery);
      this.totalCount = await countQuery.exec();
      // console.log(`searched total count: ${this.totalCount}`);
      if (this.totalCount === 0) {
        throw new NotFoundException(`No results found. => query: ${JSON.stringify(filterQuery)}`);
      }

      let connectionQuery = model.find(filterQuery);

      // after => first
      if (after) {
        connectionQuery = connectionQuery.find({ _id: { $gt: after } });
      }

      if (first) {
        connectionQuery = connectionQuery.sort({ _id: 1 }).limit(first);
      }

      // before => last
      if (before) {
        connectionQuery = connectionQuery.find({ _id: { $lt: before } });
      }

      if (last) {
        connectionQuery = connectionQuery.sort({ _id: -1 }).limit(last);
      }

      let documents = await connectionQuery.exec();
      if (last) {
        documents = documents.reverse();
      }
      // console.log(posts);

      // post is Document(mongoose) type. then use toObject()
      this.nodes = documents.map((post) => this.toModel<TDocument>(post.toObject()));

      this.edges = [];
      this.nodes.forEach((node) => {
        this.edges.push({
          cursor: node._id,
          node: node
        } as unknown as Edge<T>);
      });

      // get text filterd first node
      const firstNode = await model.findOne(filterQuery).sort({ _id: 1 }).exec();
      const firstNodeModel =
        firstNode === null ? null : this.toModel<TDocument>(firstNode.toObject());
      // get text filterd last node
      const lastNode = await model.findOne(filterQuery).sort({ _id: -1 }).exec();
      const lastNodeModel = lastNode === null ? null : this.toModel<TDocument>(lastNode.toObject());

      this.pageInfo = {
        hasNextPage:
          lastNode && lastNodeModel
            ? this.nodes[this.nodes.length - 1]._id < lastNodeModel._id
            : false,
        hasPreviousPage:
          firstNode && firstNodeModel ? firstNodeModel._id < this.nodes[0]._id : false,
        startCursor: this.nodes[0]._id,
        endCursor: this.nodes[this.nodes.length - 1]._id
      };
    }

    private toModel<TDocument extends AbstractDocument>(document: TDocument): T {
      return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _id: document._id.toHexString(),
        ...document
      } as unknown as T;
    }
  }

  return Connection as Type<IConnection>;
}

interface IConnection {
  loadConnection<TDocument extends AbstractDocument>(
    queryArgs: ConnectionQueryArgs,
    model: Model<TDocument>
  ): Promise<void>;

  loadConnectionByFilterQuery<TDocument extends AbstractDocument>(
    args: ConnectionArgs,
    model: Model<TDocument>,
    filterQuery: FilterQuery<AbstractDocument>
  ): Promise<void>;
}
