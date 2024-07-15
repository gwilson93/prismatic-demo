import { action, input } from "@prismatic-io/spectral";


  export const createProject = action({
  display: {
    label: "Create Project",
    description: "Make a request to the Create Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"customerId":{"label":"Customer id","type":"string","required":false},"locationId":{"label":" location id","type":"string","required":false},"priority":{"label":" priority","type":"string","required":false},"summary":{"label":" summary","type":"string","required":false},"tagTypeId":{"label":" tag type id","type":"string","required":false},"status":{"label":" status","type":"string","required":false}}
});

  export const updateProject = action({
  display: {
    label: "Update Project",
    description: "Make a request to the Update Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true},"customerId":{"label":"Customer id","type":"string","required":false},"locationId":{"label":" location id","type":"string","required":false},"priority":{"label":" priority","type":"string","required":false},"summary":{"label":" summary","type":"string","required":false},"tagTypeId":{"label":" tag type id","type":"string","required":false},"status":{"label":" status","type":"string","required":false}}
});

  export const deleteProject = action({
  display: {
    label: "Delete Project",
    description: "Make a request to the Delete Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});

  export const getProject = action({
  display: {
    label: "Get Project",
    description: "Make a request to the Get Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});

  export const listProject = action({
  display: {
    label: "List Project",
    description: "Make a request to the List Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"}}
});

  export const searchProject = action({
  display: {
    label: "Search Project",
    description: "Make a request to the Search Project API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});



