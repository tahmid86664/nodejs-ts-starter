/**
 *  Schemas are for validating the input data in the requests or any function
 * Example schema using zod validation.
 */

import { object, string, TypeOf } from "zod";

export const exampleDataSchema = object({
  body: object({
    name: string({ required_error: "Name is required!" }).min(6)
  })
});

export type ExampleRequestBodyInputType = TypeOf<typeof exampleDataSchema>["body"];
