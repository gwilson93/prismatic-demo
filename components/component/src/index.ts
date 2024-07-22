import { component } from "@prismatic-io/spectral";
import actions from "./actions";
import triggers from "./triggers";
import dataSources from "./dataSources";
import connections from "./connections";

export default component({
  key: "demoComponent",
  public: false,
  display: {
    label: "Endpoint",
    description: "Interact with the Endpoint API",
    iconPath: "icon.png",
  },
  actions,
  triggers,
  dataSources,
  connections,
});
