import { Datatype } from "./Enums";

interface IEntity {
  id: string; // Guid
  isDeleted?: boolean;
  createdAt?: Date;
  createdBy?: string; // Guid
  latestUpdatedAt?: Date;
  latestUpdatedBy?: string; // Guid
}

interface IProperty extends IEntity {
  name: string;
  label: string;
  datatype: Datatype;
  note: string;
  isDefault?: boolean;
  propertyType?: PropertyType;
  options?: string[];
}

interface ISettingModel extends IProperty {
  isUsed: boolean;
}

interface Property {
  id: string;
  name: string;
  label: string;
  datatype: Datatype;
  isDefault: boolean;
  value: string;
  isUsed: boolean;
  options?: string[];
}
