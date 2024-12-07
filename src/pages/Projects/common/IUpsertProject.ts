export default interface IUpsertProject {
  visible: boolean;
  data?: IProject;
  updatable?: boolean;
  onSubmit?: (project: IProject) => void;
}

export interface IProjectFilter {
  keyword: string;
  type: string;
  category: string;
}
