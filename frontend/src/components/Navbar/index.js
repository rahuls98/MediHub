import "./style.css";
import NavbarProfileChip from "../NavbarProfileChip";
import NavbarSearch from "../NavbarSearch";
import PostCreateModal from "../PostCreateModal";
import SessionCreateModal from "../SessionCreateModal";

const Navbar = props => {

    const getNavbarCreateOption = () => {
        switch (props.createOption) {
            case 'post': return <PostCreateModal />;
            case 'session': return <SessionCreateModal />;
            default: return null;
        }
    }

    return <div className="Navbar_container">
        <div className="Navbar_left">
            <NavbarSearch /> 
        </div>
        <div className="Navbar_right">
            {getNavbarCreateOption()}
            <NavbarProfileChip />
        </div>
    </div>
}

export default Navbar;