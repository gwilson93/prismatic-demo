import fieldMapForm from "./fieldMapping";
import { dataSource, input } from "@prismatic-io/spectral";
import { toSchema } from "../utils";

export const fieldMap = dataSource({
  display: {
    label: "Field Map",
    description: "A configurable, dynamic field mapping form.",
  },
  perform: async (context, { sourceObjectSchema, externalObjectSchema }) => {
    const schema = fieldMapForm.getSchema(
      sourceObjectSchema,
      externalObjectSchema
    );
    const uiSchema = fieldMapForm.getUISchema(
      sourceObjectSchema,
      externalObjectSchema
    );
    return {
      result: {
        schema,
        uiSchema,
        data: {
          sourceObject: sourceObjectSchema.object.key,
          externalObject: sourceObjectSchema.object.key,
        },
      },
    };
  },
  inputs: {
    sourceObjectSchema: input({
      label: "Source Object Schema",
      type: "code",
      required: true,
      language: "json",
      clean: (value) => toSchema(value),
    }),
    externalObjectSchema: input({
      label: "External Object Schema",
      type: "code",
      required: true,
      language: "json",
      clean: (value) => toSchema(value),
    }),
  },
  dataSourceType: "jsonForm",
});
