import JiraLogo from "@/assets/icons/JiraLogo";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  CircleUserRound,
  Settings,
} from "lucide-react";
import Input from "../../../inputs/Input";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-b">
        {/* left */}
        <div className="flex items-center gap-4">
          <div>
            <JiraLogo />
          </div>
          {/* nav bar */}
          <aside className="flex gap-2">
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Your work
              <ChevronDown size={16} />
            </nav>
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Projects
              <ChevronDown size={16} />
            </nav>
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Filters
              <ChevronDown size={16} />
            </nav>
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Dashboards
              <ChevronDown size={16} />
            </nav>
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Teams
              <ChevronDown size={16} />
            </nav>
            <nav className="hover:bg-gray-100 p-2 rounded-md flex items-center gap-1 font-medium">
              Apps
              <ChevronDown size={16} />
            </nav>
            <button className="bg-[#0c66e4] hover:bg-[#0b5dc9] py-2 px-4 rounded-md text-white">
              Create
            </button>
          </aside>
        </div>

        {/* right */}
        <div className="flex items-center gap-2">
          <div className="mr-2">
            <Input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <div className="hover:bg-gray-100 p-2 rounded-full">
              <Bell />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-full">
              <CircleHelp />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-full">
              <Settings />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-full">
              <CircleUserRound />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
