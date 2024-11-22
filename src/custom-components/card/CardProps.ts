import { ReactNode } from "react";

interface CardProps {
  width?: number;
  height?: number;
  title: string;
  className?: string;
  children: ReactNode;
  isShowTitle?: boolean;
}

export default CardProps;
