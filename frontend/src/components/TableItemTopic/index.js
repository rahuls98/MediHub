import {useState} from "react";
import "./style.css";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import topicApis from "../../apis/topic";

const TableItemTopic = props => {
    const [itemAction, setItemAction] = useState(props.initialAction);

    const handleActionClick = async () => {
        if (itemAction === "Unfollow") {
            await topicApis.unfollowTopic({"topic": props.topicId});
            setItemAction("Follow");
        } else if (itemAction === "Follow") {
            await topicApis.followTopic({"topic": props.topicId});
            setItemAction("Unfollow");
        }
    }

    return <div className="TableItemTopic_container">
        <div className="TableItemTopic_listitem">
            <ListItem
                secondaryAction={
                    <Button variant="outlined" size="small" onClick={() => handleActionClick()}>
                        {(itemAction === "Unfollow")?<RemoveCircleOutlinedIcon />:<AddCircleOutlinedIcon />}
                        {itemAction}
                    </Button>
                }
            >
                <ListItemAvatar>
                <Avatar alt={props.topic} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText primary={props.topic} />
            </ListItem>
        </div>
        {
            props.lastItem? null: <Divider variant="inset" component="li" />
        }
    </div>
}

export default TableItemTopic;