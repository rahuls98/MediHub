import "./style.css";
import SidebarMenu from "../SidebarMenu";
import SidebarFavorites from "../SidebarFavorites";

const Sidebar = () => {
    return <div className="Sidebar_container">
        <p>MediHub</p>
        <SidebarMenu />
        <hr />
        <SidebarFavorites />
    </div>
}

export default Sidebar;