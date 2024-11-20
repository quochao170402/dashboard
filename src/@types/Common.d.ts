import { ReactNode } from "react";

interface IPagination {
  current: number;
  totalPage: number;
}

interface IOption<T> {
  label: ReactNode;
  value: T;
}
