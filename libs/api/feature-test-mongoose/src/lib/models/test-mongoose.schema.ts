import { AbstractDocument } from '@libs/api/mongoose/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class TestMongooseDocument extends AbstractDocument {
  @Prop()
  text?: string;

  @Prop()
  value?: number;
}

export const TestMongooseSchema = SchemaFactory.createForClass(TestMongooseDocument);
