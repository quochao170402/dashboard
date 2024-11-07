import { MenuItemType } from "@/@types/MenuItem";
import { useState } from "react";

interface Props {
  item: MenuItemType;
}

const MenuItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleSubMenu} style={{ background: 'none', border: 'none', padding: 0 }}>
        <div>{item.icon}</div>
        <div>{item.label}</div>
      </button>
      {isOpen && item.children && (
        <div className="sub-menu">
          {item.children.map((child, idx) => (
            <MenuItem key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
