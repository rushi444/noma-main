import { navLinksData, sidebarLinksData } from "./Helper";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full overflow-auto font-kurdis">
      {navLinksData.map((items, index) => (
        <SidebarLinks item={items} value={index} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
