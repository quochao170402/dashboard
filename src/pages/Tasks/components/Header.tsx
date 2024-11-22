import Title from "@/custom-components/title/Title";
import { Tooltip } from "@/custom-components/tooltip";
import { Columns3, List, SquareKanban } from "lucide-react";
import { ViewType } from "../Task";

interface Props {
  view: ViewType;
  onChangeView: (view: ViewType) => void;
}

const Header = ({ onChangeView }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Title title={"Tasks"} />
      <div className="flex items-center gap-4">
        <Tooltip text={"Backlog"}>
          <Columns3 onClick={() => onChangeView("backlog")} />
        </Tooltip>
        <Tooltip text={"Board"}>
          <SquareKanban onClick={() => onChangeView("board")} />
        </Tooltip>
        <Tooltip text={"List"}>
          <List onClick={() => onChangeView("list")} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
