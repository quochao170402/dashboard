import { MenuItemType } from "@/@types/MenuItem";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

interface Props {
  isExpanded: boolean;
  menuItems: MenuItemType[];
}
const Sidebar = ({ menuItems, isExpanded }: Props) => {
  const { projectKey } = useParams();
  const selectProjectItems = menuItems.map((x) => {
    return {
      ...x,
      path: x.path.replace(":projectKey", projectKey || ""),
    } as MenuItemType;
  });
  return (
    <div>
      <aside>
        <nav>
          <ul className="flex flex-col gap-2 items-center p-[10px]">
            {selectProjectItems.map((x) => (
              <MenuItem key={x.path} isMenuExpanded={isExpanded} item={x} />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
