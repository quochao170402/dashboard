import { MenuItemType } from "@/@types/MenuItem";
import MenuItem from "./MenuItem";

interface Props {
  isExpanded: boolean;
  menuItems: MenuItemType[];
}

// Toggle Menu:
// 1. Resize sidebar and main screen
// 2. Hide menu label and style children menu as tooltip

const Sidebar = ({ menuItems, isExpanded }: Props) => {
  return (
    <div>
      <aside>
        <nav>
          <ul className="flex flex-col gap-2 items-center p-[10px]">
            {menuItems.map((x) => (
              <MenuItem key={x.path} isMenuExpanded={isExpanded} item={x} />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
