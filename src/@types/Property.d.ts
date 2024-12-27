import { Datatype } from "./Enums";

interface IEntity {
  id: string; // Guid
  isDeleted: boolean;
  createdAt: Date;
  createdBy: string; // Guid
  latestUpdatedAt: Date;
  latestUpdatedBy: string; // Guid
}

interface IProperty extends IEntity {
  name: string;
  label: string;
  datatype: Datatype;
  note: string;
}
