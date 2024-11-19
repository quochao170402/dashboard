export default interface IUpsertProject {
  visible: boolean;
  data?: IProject;
  updatable?: boolean;
}

export interface IProjectFilter {
  keyword: string;
  type: string;
  category: string;
}
