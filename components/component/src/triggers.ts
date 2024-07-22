import { trigger } from "@prismatic-io/spectral";

export const endpointTrigger = trigger({
  display: {
    label: "Endpoint Trigger",
    description: "A webhook trigger for receiving events from Endpoint",
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

export default { endpointTrigger };
