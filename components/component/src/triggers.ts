import { trigger } from "@prismatic-io/spectral";

export const permitFlowTrigger = trigger({
  display: {
    label: "PermitFlow Trigger",
    description: "A webhook trigger for receiving events from PermitFlow",
  },
  perform: async (context, payload, params) => {
    return Promise.resolve({
      payload,
    });
  },
  inputs: {},
  synchronousResponseSupport: "valid",
  scheduleSupport: "valid",
});

export default { permitFlowTrigger };
