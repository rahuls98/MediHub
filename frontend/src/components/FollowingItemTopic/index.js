import {useState} from "react";
import "./style.css";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const FollowingItemTopic = () => {
    const [unfollow, setUnfollow] = useState(true);

    const handleUnfollow = () => {
        setUnfollow(!unfollow);
    }

    return <div className="FollowingItemTopic_container">
        <div className="FollowingItemTopic_listitem">
            <ListItem
                secondaryAction={
                <IconButton edge="end" onClick={() => handleUnfollow()}>
                    { unfollow? <RemoveCircleOutlinedIcon /> : <AddCircleOutlinedIcon /> }
                </IconButton>
                }
            >
                <ListItemAvatar>
                <Avatar alt="AIDS" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText primary="AIDS" />
            </ListItem>
        </div>
        <Divider variant="inset" component="li" />
    </div>
}

export default FollowingItemTopic;