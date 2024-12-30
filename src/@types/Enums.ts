export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  REVIEW = "REVIEW",
  RELEASE = "RELEASE",
  DONE = "DONE",
}

export enum UserRole {
  Admin = "Admin",
  Manager = "Manager",
  User = "User",
}

export enum ProjectStatus {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  CANCELLED = 3,
}

export enum Datatype {
  Text = 0,
  TextArea = 1,

  Number = 2,
  Decimal = 3,

  DateTime = 4,
  TimeSpan = 5,

  Boolean = 6,

  RadioButton = 7,
  SelectList = 8,

  File = 9,

  MultiSelect = 10,
  Person = 11,
}

export enum PropertyType {
  Project = 0,
  Task = 1,
}
