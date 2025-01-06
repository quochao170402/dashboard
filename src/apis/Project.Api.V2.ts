import API from "@/utils/API";

const endPoint = "projects/v2/Project";

const ProjectApiV2 = {
  add: (
    values: {
      PropertyId: string;
      Value: string;
    }[]
  ) => API.post(`${endPoint}/Add`, { properties: values }),
};

export default ProjectApiV2;
