import { MenuItemType } from "@/@types/MenuItem";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  item: MenuItemType;
  isMenuExpanded: boolean;
}

const MenuItem = ({ item, isMenuExpanded }: Props) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <li
      key={item.path}
      className={`items-center p-2 w-full rounded-xl ${
        isActive(item.path) ? "bg-gray-100 text-blue-700" : ""
      }`}
    >
      <NavLink
        to={item.path}
        style={{ background: "none", border: "none", padding: 0 }}
        className={`${
          isActive(item.path) ? "text-blue-700" : ""
        } relative flex items-center gap-4 `}
      >
        <div>{item.icon}</div>
        <div hidden={!isMenuExpanded}>{item.label}</div>
      </NavLink>
    </li>
  );
};

export default MenuItem;
