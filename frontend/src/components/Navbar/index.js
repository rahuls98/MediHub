import "./style.css";
import NavbarProfileChip from "../NavbarProfileChip";
import NavbarSearch from "../NavbarSearch";

const Navbar = () => {
    return <div className="Navbar_container">
        <div className="Navbar_left">
            <NavbarSearch /> 
        </div>
        <div className="Navbar_right">
            <NavbarProfileChip />
        </div>
    </div>
}

export default Navbar;