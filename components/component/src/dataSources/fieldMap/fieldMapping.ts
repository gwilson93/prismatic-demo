import { Schema, flattenSchema } from "../utils";

export const getSchema = (
  sourceObjectSchema: Schema,
  externalObjectSchema: Schema
) => {
  const { fields: sourceFields } = flattenSchema(sourceObjectSchema);
  const { fields: externalFields } = flattenSchema(externalObjectSchema);
  const fieldMapSchema = {
    properties: {
      sourceObject: {
        type: "string",
        readOnly: true,
      },
      externalObject: {
        type: "string",
        readOnly: true,
      },
      fieldMap: {
        type: "array",
        uniqueItems: true,
        items: {
          type: "object",
          properties: {
            source: {
              type: "object",
              properties: {
                key: {
                  title: `Fields`,
                  $ref: "#/definitions/source",
                },
                type: {
                  title: "Field Type",
                  $ref: "#/definitions/type",
                },
                required: {
                  type: "boolean",
                },
              },

              required: ["key"],
            },
            external: {
              type: "object",
              properties: {
                key: {
                  title: `Fields`,
                  $ref: "#/definitions/external",
                },
                type: {
                  title: "Field Type",
                  $ref: "#/definitions/type",
                },
                required: {
                  type: "boolean",
                },
              },
              required: ["key"],
            },
          },
        },
      },
    },
    definitions: {
      source: {
        type: "string",
        oneOf: sourceFields.map((field) => ({
          const: field.key,
          title: field?.label ? field.label : field.key,
        })),
      },
      external: {
        type: "string",
        oneOf: externalFields.map((field) => ({
          const: field.key,
          title: field?.label ? field.label : field.key,
        })),
      },
      type: {
        type: "string",
        enum: ["String", "Boolean", "Date", "DateTime", "Number", "Decimal"],
      },
    },
  };

  return fieldMapSchema;
};

export const getUISchema = (sourceObject: Schema, externalObject: Schema) => {
  const fieldMapUiSchema = {
    type: "Group",
    label: `${sourceObject.object.label} Fields to ${externalObject.object.label} Fields`,
    elements: [
      {
        type: "Control",
        scope: "#/properties/fieldMap",
        label: "Field Mapping",
        options: {
          layout: "Accordion",
          elementLabelProp: ["source", "key"],
          showSortButtons: true,
          detail: {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Group",
                label: `${sourceObject.object.label} Field`,
                elements: [
                  {
                    type: "VerticalLayout",
                    elements: [
                      {
                        type: "Control",
                        scope: "#/properties/source/properties/key",
                        options: {
                          autocomplete: true,
                        },
                      },
                      {
                        type: "HorizontalLayout",
                        elements: [
                          {
                            type: "Control",
                            scope: "#/properties/source/properties/type",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "Group",
                label: `${externalObject.object.label} Field`,
                elements: [
                  {
                    type: "VerticalLayout",
                    elements: [
                      {
                        type: "Control",
                        scope: "#/properties/external/properties/key",
                        options: {
                          autocomplete: true,
                        },
                      },
                      {
                        type: "HorizontalLayout",
                        elements: [
                          {
                            type: "Control",
                            scope: "#/properties/external/properties/type",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  };

  return fieldMapUiSchema;
};

export default { getSchema, getUISchema };
