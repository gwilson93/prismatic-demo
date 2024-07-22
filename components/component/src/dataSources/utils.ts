import { Element, util } from "@prismatic-io/spectral";

type SchemaObject = {
  object: Element;
  fields: Element[];
};
export type Schema = SchemaObject;

export const isSchema = (value: any): value is Schema => {
  return Object.keys(value).includes("object");
};
export const flattenSchema = (schema: Schema) => {
  const fields = schema.fields.flatMap((field) => {
    if (isSchema(field)) {
      return field.fields.map((f) => ({
        key: `${field.object.key}.${f}`,
        label: `${
          field.object?.label ? field.object.label : field.object.key
        } - ${f?.label ? f.label : f.key}`,
      }));
    } else {
      return field;
    }
  });
  return { object: schema.object, fields };
};

export const toSchema = (value: unknown): Schema => {
  try {
    let parsedValue =
      typeof value === "object"
        ? value
        : JSON.parse(util.types.toString(value));

    if (util.types.isObjectSelection(parsedValue)) {
      const selectedObject = util.types.toObjectSelection(value)[0];
      return toSchema(selectedObject);
    } else if (isSchema(parsedValue)) {
      return parsedValue as Schema;
    } else {
      throw new Error(
        "Invalid schema provided. Please verify it matches the form of {'object': {'key': 'foo', 'label': 'Foo'}, 'fields': [{'key': 'bar', 'label': 'Bar'}]}"
      );
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to parse Schema. Please verify it is valid JSON.");
  }
};
