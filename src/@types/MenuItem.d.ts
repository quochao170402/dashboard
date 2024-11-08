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
  component: React.FC;
  children?: Route[]; // Optional children property for nested routes
}
