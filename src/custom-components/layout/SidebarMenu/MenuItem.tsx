import { MenuItemType } from "@/@types/MenuItem";
import HoverCard from "@/custom-components/hover-card/HoverCard";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  item: MenuItemType;
  isMenuExpanded: boolean;
}

const MenuItem = ({ item, isMenuExpanded }: Props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuItemRef = useRef<HTMLLIElement>(null); // Reference to the MenuItem

  const toggleSubMenu = () => {
    if (isMenuExpanded) {
      setIsOpen((prev) => !prev);
    } else {
      setIsHovered(true);
    }
  };

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [isMenuExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuItemRef.current &&
        !menuItemRef.current.contains(event.target as Node)
      ) {
        setIsHovered(false); // Set isHovered to false if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li ref={menuItemRef} key={item.path} className="items-center ">
      <NavLink
        to={item.children && item.children.length > 0 ? "#" : item.path}
        onClick={toggleSubMenu}
        style={{ background: "none", border: "none", padding: 0 }}
        className={`${
          isActive(item.path) ? "text-red-500" : ""
        } relative flex items-center gap-4 `}
      >
        <div>{item.icon}</div>
        <div hidden={!isMenuExpanded}>{item.label}</div>
        <div hidden={isMenuExpanded} className="absolute z-10 ml-12">
          {isHovered && item.children && item.children.length > 0 && (
            <HoverCard isShow={isHovered}>
              <ul className="flex flex-col gap-3">
                {item.children.map((child, idx) => (
                  <li key={idx}>
                    <NavLink to={child.path}>{child.label}</NavLink>
                  </li>
                ))}
              </ul>
            </HoverCard>
          )}
        </div>
      </NavLink>
      {isOpen && item.children && item.children.length > 0 && (
        <ul className="flex flex-col gap-3 mt-3 ml-6 transition-all duration-300">
          {item.children.map((child, idx) => (
            <MenuItem key={idx} item={child} isMenuExpanded={isMenuExpanded} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
