import {useState} from "react";
import "./style.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const NavbarProfileChip = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const actionsMenuOpen = Boolean(anchorEl);

    const handleChipClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return <div className="NavbarProfileChip_container">
        <Chip
            variant="outlined"
            color="neutral"
            size="lg"
            startDecorator={<Avatar size="sm" />}
            endDecorator={<ArrowDropDownIcon fontSize="md" />}
            onClick={handleChipClick}
        >
            username
        </Chip>
        <Menu
            anchorEl={anchorEl}
            open={actionsMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
}

export default NavbarProfileChip;