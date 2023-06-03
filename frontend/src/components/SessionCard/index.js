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
// import sessionApis from "../../apis/session";
import { useHMSActions } from "@100mslive/react-sdk";
import userUtils from "../../utils/user";
import vaultApis from "../../apis/vault";

const SessionCard = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const actionsMenuOpen = Boolean(anchorEl);
    // const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
    const hmsActions = useHMSActions();

    const getDate = () => {
        let dateString = props.session?.sessionDate;
        // eslint-disable-next-line
        const [month, date, year] = dateString.split(" ");
        return `${month} ${date}`;
    }

    const handleMenuTriggerClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleUnenrollmentClick = async () => {
        console.log("Unenroll!");
        // await sessionApis.unenrollInSession(props.session._id);
    }

    const handleJoinClick = async () => {
        const userName = userUtils.getUserName();
        const userRole = userUtils.getRole();
        let hmsRole = "";
        if (userRole === "User") {
            hmsRole = "hls-viewer";
        } else if (userRole === "Expert") {
            hmsRole = "broadcaster";
        }
        hmsRole = "broadcaster";
        let vaultResponse;
        try {
            vaultResponse = await vaultApis.getHmsAuth();
        } catch (err) {
            console.log(err);
        }
        const { HMS_ROOM_ID, HMS_TOKEN_ENDPOINT } = await vaultResponse.json();
        const response = await fetch(`${HMS_TOKEN_ENDPOINT}api/token`, {
            method: "POST",
            body: JSON.stringify({
                user_id: `${Date.now()}`,
                role: hmsRole, //broadcaster, hls-viewer
                type: "app",
                room_id: HMS_ROOM_ID,
            }),
        })
        const { token } = await response.json();
        
        hmsActions.join({
            userName: userName,
            authToken: token,
        });
        props.setLayout(2);
    }

    return <div className="SessionCard_container">
        <div className="SessionCard_datetime">
            <div>
                <span className="SessionCard_date">{getDate()}</span>
                <br />
                <span className="SessionCard_time">{props.session?.sessionTime || ""}</span>
            </div>
        </div>
        {/* <div className={"SessionCard_details".concat(descriptionCollapsed? " collapsed" : "")}> */}
        <div className="SessionCard_details">
            <h3>{props.session?.title || ""}</h3>
            <Stack direction="row" flexWrap="wrap">
            {
                (props.session?.topics.length === 0)?null:
                props.session?.topics.map((topic, ind) => <TopicChip key={ind} label={topic} withMargin/>)
            }
            </Stack>
            {/* <p className={"SessionCard_description".concat(descriptionCollapsed? " collapsed" : "")}> */}
            <p className="SessionCard_description">
                {props.session?.description || ""}
            </p>
            {/* <div className="SessionCard_parah_moreless">
                <span onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}>{descriptionCollapsed? "more": "less"}</span>
            </div> */}
            <div className="SessionCard_action" onClick={() => handleJoinClick()}>
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
                    <MenuItem onClick={() => handleUnenrollmentClick()}>
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