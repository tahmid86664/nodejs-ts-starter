import { getModelForClass, ModelOptions, Prop } from "@typegoose/typegoose";

export const examplePrivateFields = ["__v"];

@ModelOptions({ schemaOptions: { collection: "examples", timestamps: true } })
export class Example {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  image: string;
}

const ExampleModel = getModelForClass(Example);
export default ExampleModel;
