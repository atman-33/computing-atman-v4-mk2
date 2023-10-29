import { AbstractDocument } from '@libs/api/mongoose/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class SampleMongooseTableDocument extends AbstractDocument {
  @Prop()
  text?: string;

  @Prop()
  value?: number;
}

export const SampleMongooseTableSchema = SchemaFactory.createForClass(SampleMongooseTableDocument);
