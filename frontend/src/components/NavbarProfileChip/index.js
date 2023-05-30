import "./style.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';

const NavbarProfileChip = () => {
    return <div className="NavbarProfileChip_container">
        <Chip
            variant="outlined"
            color="neutral"
            size="lg"
            startDecorator={<Avatar size="sm" />}
            endDecorator={<ArrowDropDownIcon fontSize="md" />}
            onClick={() => alert('You clicked the Joy Chip!')}
        >
            username
        </Chip>
    </div>
}

export default NavbarProfileChip;