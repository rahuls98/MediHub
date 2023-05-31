import { useState } from "react";
import "./style.css";
import Stack from '@mui/material/Stack';
import TopicChip from "../TopicChip";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const SessionCard = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const actionsMenuOpen = Boolean(anchorEl);
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

    const handleMenuTriggerClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return <div className="SessionCard_container">
        <div className="SessionCard_datetime">
            <div>
                <span className="SessionCard_date">May 22</span>
                <br />
                <span className="SessionCard_time">09:00 AM</span>
            </div>
        </div>
        <div className={"SessionCard_details".concat(descriptionCollapsed? " collapsed" : "")}>
            <h3>Session title</h3>
            <Stack direction="row" flexWrap="wrap">
                <TopicChip label="topic 1" withMargin/>
                <TopicChip label="topic 2" withMargin/>
                <TopicChip label="topic 2" withMargin/>
            </Stack>
            <p className={"SessionCard_description".concat(descriptionCollapsed? " collapsed" : "")}>
                Eget mauris pharetra et ultrices. Leo in vitae turpis massa. Sit amet consectetur adipiscing elit pellentesque habitant. Sit amet massa vitae tortor condimentum. Tortor aliquam nulla facilisi cras fermentum odio eu. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Dignissim sodales ut eu sem integer vitae justo. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Donec pretium vulputate sapien nec.
            </p>
            <div className="SessionCard_parah_moreless">
                <span onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}>{descriptionCollapsed? "more": "less"}</span>
            </div>
            <div className="SessionCard_action">
                <LoginOutlinedIcon sx={{ fontSize: 18 }}/>
                <span>Join</span>
            </div>
        </div>
        <div className="SessionCard_menu">
            <div
                id="basic-button"
                className="SessionCard_menu_trigger"
                aria-controls={actionsMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={actionsMenuOpen ? 'true' : undefined}
                onClick={handleMenuTriggerClick}>
                <MoreVertOutlinedIcon />
            </div>
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
                            <EditOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DeleteOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <CancelPresentationOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Unenroll</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    </div>
};

export default SessionCard;