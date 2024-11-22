import DropdownProps from "./DropdownProps";

const Dropdown = ({ children, className }: DropdownProps) => {
  return <div className={`${className} p-4`}>{children}</div>;
};

export default Dropdown;
