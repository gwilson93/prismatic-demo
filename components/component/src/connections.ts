import {
  connection,
  oauth2Connection,
  OAuth2Type,
} from "@prismatic-io/spectral";

export const basic = connection({
  key: "basic",
  label: "Basic Username/Password",
  comments: "Basic Username and Password connection",
  inputs: {
    username: {
      label: "Username",
      placeholder: "Username",
      type: "string",
      required: true,
      shown: true,
      comments: "Username",
    },
    password: {
      label: "Password",
      placeholder: "Password",
      type: "password",
      required: true,
      shown: true,
      comments: "Password",
    },
  },
});

export const apiKey = connection({
  key: "apiKey",
  label: "API Key",
  comments: "API Key connection",
  inputs: {
    apiKey: {
      label: "API Key",
      placeholder: "API Key",
      type: "string",
      required: true,
      shown: true,
      comments: "API Key",
    },
  },
});

export const authorizationCode = oauth2Connection({
  key: "authorizationCode",
  label: "OAuth 2.0 Authorization Code",
  comments: "OAuth 2.0 Authorization Code flow",
  oauth2Type: OAuth2Type.AuthorizationCode,
  inputs: {
    authorizeUrl: {
      label: "Authorize URL",
      placeholder: "Authorize URL",
      type: "string",
      required: true,
      shown: true,
      comments: "The OAuth 2.0 Authorization URL for the API",
    },
    tokenUrl: {
      label: "Token URL",
      placeholder: "Token URL",
      type: "string",
      required: true,
      shown: true,
      comments: "The OAuth 2.0 Token URL for the API",
    },
    scopes: {
      label: "Scopes",
      placeholder: "Scopes",
      type: "string",
      required: false,
      shown: true,
      comments: "Space separated OAuth 2.0 permission scopes for the API",
      default: "",
    },
    clientId: {
      label: "Client ID",
      placeholder: "Client ID",
      type: "string",
      required: true,
      shown: true,
      comments: "Client Identifier of your app for the API",
    },
    clientSecret: {
      label: "Client Secret",
      placeholder: "Client Secret",
      type: "password",
      required: true,
      shown: true,
      comments: "Client Secret of your app for the API",
    },
    headers: {
      label: "Headers",
      type: "string",
      collection: "keyvaluelist",
      required: false,
      shown: true,
      comments: "Additional header to supply to authorization requests",
    },
  },
});

export const clientCredentials = oauth2Connection({
  key: "clientCredentials",
  label: "OAuth 2.0 Client Credentials",
  comments: "OAuth 2.0 Client Credentials flow",
  oauth2Type: OAuth2Type.ClientCredentials,
  inputs: {
    tokenUrl: {
      label: "Token URL",
      placeholder: "Token URL",
      type: "string",
      required: true,
      shown: true,
      comments: "The OAuth 2.0 Token URL for the API",
    },
    scopes: {
      label: "Scopes",
      placeholder: "Scopes",
      type: "string",
      required: false,
      shown: true,
      comments: "Space separated OAuth 2.0 permission scopes for the API",
      default: "",
    },
    clientId: {
      label: "Client ID",
      placeholder: "Client ID",
      type: "string",
      required: true,
      shown: true,
      comments: "Client Identifier of your app for the API",
    },
    clientSecret: {
      label: "Client Secret",
      placeholder: "Client Secret",
      type: "string",
      required: true,
      shown: true,
      comments: "Client Secret of your app for the API",
    },
    headers: {
      label: "Headers",
      type: "string",
      collection: "keyvaluelist",
      required: false,
      shown: true,
      comments: "Additional header to supply to token requests",
    },
  },
});

export default [apiKey, authorizationCode, clientCredentials, basic];
