import { ReactNode } from "react";

interface IEntity {
  id: string;
  createdAt: Date;
  isDeleted: boolean;
}

interface IPagination {
  current: number;
  totalPage: number;
}

interface IOption<T> {
  label: ReactNode;
  value: T;
}
