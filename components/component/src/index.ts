import { component } from "@prismatic-io/spectral";
import actions from "./actions";
import triggers from "./triggers";
import dataSources from "./dataSources";
import connections from "./connections";

export default component({
  key: "demoComponent",
  public: false,
  display: {
    label: "PermitFlow",
    description: "Interact with the PermitFlow API",
    iconPath: "icon.png",
  },
  actions,
  triggers,
  dataSources,
  connections,
});
