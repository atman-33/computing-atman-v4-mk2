import { AbstractDocument } from '@libs/api/mongoose/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class SampleUserDocument extends AbstractDocument {
  @Prop()
  username!: string;

  @Prop()
  age!: number;

  @Prop()
  hobbies?: string[];

  @Prop()
  premiumAccount!: boolean;
}

export const SampleUserSchema = SchemaFactory.createForClass(SampleUserDocument);
