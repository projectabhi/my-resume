import {
  AcademicCapIcon,
  PresentationChartBarIcon,
  SquaresPlusIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import ToolTipIcon from "./ToolTipIcon";

const SideMenu = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    console.log("path:", path);
    navigate(path);
  };
  return (
    <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <ToolTipIcon label="Profile" onClick={() => handleNavigate("/profile")}>
          <UserIcon className="h-6 w-6"></UserIcon>
        </ToolTipIcon>
      </div>

      <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <ToolTipIcon label="Skills" onClick={() => handleNavigate("/skills")}>
          <PresentationChartBarIcon className="h-6 w-6"></PresentationChartBarIcon>
        </ToolTipIcon>
      </div>

      <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <ToolTipIcon label="Projects" onClick={() => handleNavigate("/page2")}>
          <SquaresPlusIcon className="h-6 w-6"></SquaresPlusIcon>
        </ToolTipIcon>
      </div>

      <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
        <ToolTipIcon label="Education" onClick={() => handleNavigate("/page2")}>
          <AcademicCapIcon className="h-6 w-6"></AcademicCapIcon>
        </ToolTipIcon>
      </div>
    </aside>
  );
};
export default SideMenu;
