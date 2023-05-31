import "./style.css";
import SidebarMenu from "../SidebarMenu";
import logo from "../../assets/images/logo.png";

const Sidebar = props => {
    return <div className="Sidebar_container">
        <div className="Sidebar_logo_container">
            <img className="Sidebar_logo" src={logo} alt="logo" />
        </div>
        <SidebarMenu selected={props.selected} setSelected={props.setSelected} />
    </div>
}

export default Sidebar;