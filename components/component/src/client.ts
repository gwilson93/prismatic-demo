import axios, { AxiosInstance } from "axios";
import {
  basic,
  apiKey,
  authorizationCode,
  clientCredentials,
} from "./connections";
import { util, Connection, ConnectionError } from "@prismatic-io/spectral";

export const getAuthHeaders = (
  connection: Connection
): { Authorization: string } | {} => {
  if (!connection) return {};

  if (connection.key === basic.key) {
    const username = util.types.toString(connection.fields.username);
    const password = util.types.toString(connection.fields.password);
    const hash = Buffer.from(`${username}:${password}`).toString("base64");
    return { Authorization: `Basic ${hash}` };
  }

  if (connection.key === apiKey.key) {
    const apiKey = util.types.toString(connection.fields.apiKey);
    return { Authorization: `Basic ${apiKey}` };
  }

  if (
    connection.key === authorizationCode.key ||
    connection.key === clientCredentials.key
  ) {
    const token = util.types.toString(connection.token?.access_token);
    return { Authorization: `Bearer ${token}` };
  }

  throw new ConnectionError(connection, "Unknown Connection type provided.");
};

export const createClient = (
  connection: Connection,
  debug: boolean = false
): AxiosInstance => {
  const axiosClient = axios.create({
    headers: {
      ...getAuthHeaders(connection),
    },
  });

  if (debug) {
    axiosClient.interceptors.response.use((response) => {
      console.log(response.data);
      return response;
    });
    axiosClient.interceptors.request.use((request) => {
      console.log(JSON.stringify(request));
      return request;
    });
  }
  return axiosClient;
};
