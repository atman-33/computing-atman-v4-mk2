import { AbstractDocument } from '@libs/api/mongoose/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class SampleTodoDocument extends AbstractDocument {
  @Prop()
  title!: string;

  @Prop()
  editing!: boolean;

  @Prop()
  completed!: boolean;
}

export const SampleTodoSchema = SchemaFactory.createForClass(SampleTodoDocument);
