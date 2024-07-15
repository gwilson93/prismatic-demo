import { dataSource, input } from "@prismatic-io/spectral";
import { createClient } from "../client";

const connectionInput = input({
  label: "Connection",
  type: "connection",
  required: true,
});


export const exampleDataSource = dataSource({
  display: {
    label: "Example Data Source",
    description: "This is an example data source",
  },
  perform: async (context, { connection }) => {
    const client = createClient(connection);
    return {
      result: "",
    };
  },
  inputs: {
    connection: connectionInput,
  },
  dataSourceType: "string",
});

