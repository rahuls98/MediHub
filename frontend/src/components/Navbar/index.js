import "./style.css";
import NavbarProfileChip from "../NavbarProfileChip";
import NavbarSearch from "../NavbarSearch";
import ModalPostCreate from "../ModalPostCreate";
import ModalSessionCreate from "../ModalSessionCreate";

const Navbar = props => {

    const getNavbarCreateOption = () => {
        switch (props.createOption) {
            case 'post': return <ModalPostCreate />;
            case 'session': return <ModalSessionCreate />;
            default: return null;
        }
    }

    return <div className="Navbar_container">
        <div className="Navbar_left">
            {
                props.withSearch ?
                <NavbarSearch /> :
                null
            }
        </div>
        <div className="Navbar_right">
            {getNavbarCreateOption()}
            <NavbarProfileChip />
        </div>
    </div>
}

export default Navbar;