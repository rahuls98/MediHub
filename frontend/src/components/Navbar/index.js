import "./style.css";
import NavbarProfileChip from "../NavbarProfileChip";
import NavbarSearch from "../NavbarSearch";
import PostCreateModal from "../PostCreateModal";

const Navbar = () => {
    return <div className="Navbar_container">
        <div className="Navbar_left">
            <NavbarSearch /> 
        </div>
        <div className="Navbar_right">
            <PostCreateModal />
            <NavbarProfileChip />
        </div>
    </div>
}

export default Navbar;