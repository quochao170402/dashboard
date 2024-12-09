import { MenuItemType } from "@/@types/MenuItem";
import { NavLink, useLocation, useParams } from "react-router-dom";

interface Props {
  item: MenuItemType;
  isMenuExpanded: boolean;
}

const MenuItem = ({ item, isMenuExpanded }: Props) => {
  const location = useLocation();
  // const { projectId } = useParams();

  // const path = item.path.replace(":projectId", projectId || "");
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <li
      key={item.path}
      className={`items-center p-2 w-full text-[#3754DB] rounded-xl ${
        isActive(item.path) ? "bg-gray-100 font-bold" : ""
      }`}
    >
      <NavLink
        to={item.path}
        style={{ background: "none", border: "none", padding: 0 }}
        className={`${
          isActive(item.path) ? "font-bold" : ""
        } relative flex items-center gap-4 `}
      >
        {item.icon({ filled: isActive(item.path) })}
        <div hidden={!isMenuExpanded}>{item.label}</div>
      </NavLink>
    </li>
  );
};

export default MenuItem;
