import {useState} from "react";
import "./style.css";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const FollowingItemExpert = () => {
    const [unfollow, setUnfollow] = useState(true);
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Unfollowed");

    const handleClick = () => {
        if (unfollow) {
            setSnackbarMessage("Unfollowed");
        } else {
            setSnackbarMessage("Followed");
        }
        setUnfollow(!unfollow);
        setSnackbar(true);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbar(false);
    };

    return <div className="FollowingItemExpert_container">
        <div className="FollowingItemExpert_listitem">
            <ListItem 
                alignItems="flex-start"
                secondaryAction={
                    <IconButton edge="end" onClick={() => handleClick()}>
                        { unfollow? <RemoveCircleOutlinedIcon /> : <AddCircleOutlinedIcon /> }
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Travis Howard"
                    secondary={
                        <div>
                            <i style={{fontSize: '13px'}}>Expertise: </i> 
                        </div>
                    }
                />
            </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        <Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackbarClose}>
            <Alert icon={false} onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    </div>
}

export default FollowingItemExpert;