import "./style.css";
import SidebarMenu from "../SidebarMenu";
import SidebarFavorites from "../SidebarFavorites";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
    return <div className="Sidebar_container">
        <div className="Sidebar_logo_container">
            <img className="Sidebar_logo" src={logo} alt="logo" />
        </div>
        <SidebarMenu />
        {/* <hr />
        <SidebarFavorites /> */}
    </div>
}

export default Sidebar;