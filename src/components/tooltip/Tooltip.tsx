import { useState } from "react";
import TooltipProps from "./TooltipProps";

const Tooltip = ({
  text,
  children,
  className = "",
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClass = (): string => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "";
    }
  };
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {" "}
        {children}
      </div>

      {visible && (
        <div
          className={`absolute z-50 ${positionClass()} ${className} px-3 py-2 border text-sm rounded shadow-md`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
