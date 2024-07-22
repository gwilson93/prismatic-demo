import { action, input } from "@prismatic-io/spectral";


  export const createPatient = action({
  display: {
    label: "Create Patient",
    description: "Make a request to the Create Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"firstName":{"label":"Firstname","type":"string","required":false},"lastName":{"label":"Lastname","type":"string","required":false},"phone":{"label":"Phone","type":"string","required":false},"address":{"label":"Address","type":"string","required":false}}
});

  export const updatePatient = action({
  display: {
    label: "Update Patient",
    description: "Make a request to the Update Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true},"firstName":{"label":"Firstname","type":"string","required":false},"lastName":{"label":"Lastname","type":"string","required":false},"phone":{"label":"Phone","type":"string","required":false},"address":{"label":"Address","type":"string","required":false}}
});

  export const deletePatient = action({
  display: {
    label: "Delete Patient",
    description: "Make a request to the Delete Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});

  export const getPatient = action({
  display: {
    label: "Get Patient",
    description: "Make a request to the Get Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});

  export const listPatient = action({
  display: {
    label: "List Patient",
    description: "Make a request to the List Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"}}
});

  export const searchPatient = action({
  display: {
    label: "Search Patient",
    description: "Make a request to the Search Patient API endpoint",
  },
  perform: async (context) => {
    return {
      data: {},
    };
  },
  inputs: {"connection":{"type":"connection","required":false,"label":"Connection"},"pk":{"label":"Id","key":"id","type":"string","required":true}}
});



