import Title from "@/components/title/Title";
import { Tooltip } from "@/components/tooltip";
import { Columns3, List, SquareKanban } from "lucide-react";
import { ViewType } from "../Task";

interface Props {
  view: ViewType;
  onChangeView: (view: ViewType) => void;
}

const Header = ({ view, onChangeView }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Title title={"Tasks"} />
      <div className="flex items-center gap-4">
        <Tooltip text={"Backlog"}>
          <Columns3
            className={`${view === "backlog" ? "text-[#0c66e4]" : ""}`}
            onClick={() => onChangeView("backlog")}
          />
        </Tooltip>
        <Tooltip text={"Board"}>
          <SquareKanban
            className={`${view === "board" ? "text-[#0c66e4]" : ""}`}
            onClick={() => onChangeView("board")}
          />
        </Tooltip>
        <Tooltip text={"List"}>
          <List
            className={`${view === "list" ? "text-[#0c66e4]" : ""}`}
            onClick={() => onChangeView("list")}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
