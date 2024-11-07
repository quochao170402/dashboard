import { MenuItemType } from "@/@types/MenuItem";
import MenuItem from "./MenuItem";

interface Props {
  menuItems: MenuItemType[];
}

const Sidebar = ({ menuItems }: Props) => {
  return (
    <div>
      {menuItems.map((x) => (
        <MenuItem item={x} />
      ))}
    </div>
  );
};

export default Sidebar;
