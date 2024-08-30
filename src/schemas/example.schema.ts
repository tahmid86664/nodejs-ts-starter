import { object, string, TypeOf } from "zod";

export const createExample = object({
  body: object({
    name: string({
      required_error: "Example name is required"
    }).min(3),
    image: string({
      required_error: "Image for example is required"
    }).min(10)
  })
});

export type CreateExampleInputType = TypeOf<typeof createExample>["body"];
