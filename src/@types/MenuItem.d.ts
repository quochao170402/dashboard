import { ReactNode } from "react";

interface MenuItemType {
  icon: ReactNode;
  label: string;
  path: string;
  children?: MenuItemType[];
}

interface Route {
  path: string;
  name: string;
  component: ReactNode;
  children?: Route[]; // Optional children property for nested routes
}
