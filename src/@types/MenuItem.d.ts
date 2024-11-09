import MenuIconProps from "@/assets/icons/common";
import { ReactNode } from "react";

interface MenuItemType {
  icon: (props: MenuIconProps) => ReactNode;
  label: string;
  path: string;
  component: ReactNode;
}

interface Route {
  path: string;
  name: string;
  component: ReactNode;
  // children?: Route[]; // Optional children property for nested routes
}

interface IRoute {
  icon: ReactNode;
  path: string;
  name: string;
  component: ReactNode;
}
