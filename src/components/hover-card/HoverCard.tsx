import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  isShow: boolean;
}

const HoverCard = ({ isShow, children }: Props) => {
  return <div className="p-2 bg-white rounded-sm shadow-sm">{isShow && <div>{children}</div>}</div>;
};

export default HoverCard;
