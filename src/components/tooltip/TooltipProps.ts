import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children?: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}
export default TooltipProps;
