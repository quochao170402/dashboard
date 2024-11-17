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
  label: string;
  component: ReactNode;
  children?: Route[];
}
