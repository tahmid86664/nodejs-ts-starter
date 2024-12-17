/**
 * It's an example model definition using Typegoose as this project is initialized with Typegoose ORM
 */

import { getModelForClass, Index, ModelOptions, Prop } from "@typegoose/typegoose";

@ModelOptions({ schemaOptions: { collection: "users", timestamps: true } })
@Index({ email: 1 }, { unique: true })
export class User {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  email: string;
}

export const UserModel = getModelForClass(User);
