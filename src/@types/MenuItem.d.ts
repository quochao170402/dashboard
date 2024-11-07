import { ReactNode } from "react";

interface MenuItemType {
  icon: ReactNode;
  label: string;
  path: string;
  children: MenuItemType[];
}
