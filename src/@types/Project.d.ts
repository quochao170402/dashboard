interface IEntity {
  id: string;
  isDeleted: boolean;
  createdAt: Date;
  createdBy: string;
  latestUpdatedAt: Date;
  latestUpdatedBy: string;
}

interface IProject extends IEntity {
  startDate: Date;
  key: string;
  endDate: Date;
  name: string;
  description: string;
  status: ProjectStatus;
  leaderId?: string;
  url?: string;
}

interface IProjectResponse extends IProject {
  leaderName?: string;
}

interface IProjectTableResponse {
  id: string; // Unique ID for the entity
  properties: Property[]; // List of properties for the entity
}
