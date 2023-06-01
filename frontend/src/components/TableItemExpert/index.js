import {useState} from "react";
import "./style.css";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const TableItemExpert = props => {
    const [itemAction, setItemAction] = useState(props.initialAction);
    // const [snackbar, setSnackbar] = useState(false);
    // const [snackbarMessage, setSnackbarMessage] = useState("Unfollowed");

    const handleActionClick = () => {
        console.log(itemAction);
        if (itemAction === "Unfollow") {
            // setSnackbarMessage("Unfollowed");
            setItemAction("Follow");
        } else if (itemAction === "Follow") {
            // setSnackbarMessage("Followed");
            setItemAction("Unfollow");
        }
        // setSnackbar(true);
    }

    // const handleSnackbarClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    //     setSnackbar(false);
    // };

    return <div className="TableItemExpert_container">
        <div className="TableItemExpert_listitem">
            <ListItem 
                alignItems="flex-start"
                secondaryAction={
                    <Button variant="outlined" size="small" onClick={() => handleActionClick()}>
                        {(itemAction === "Unfollow")?<RemoveCircleOutlinedIcon />:<AddCircleOutlinedIcon />}
                        {itemAction}
                    </Button>
                }>
                <ListItemAvatar>
                    <Avatar alt={props.fullname} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={props.fullname}
                    secondary={
                        <div>
                            <i style={{fontSize: '13px'}}>Expertise: {props.expertiseTopics.join(', ')}</i> 
                        </div>
                    }
                />
            </ListItem>
        </div>
        {
            props.lastItem? null: <Divider variant="inset" component="li" />
        }
        {/* <Snackbar open={snackbar} autoHideDuration={1000} onClose={handleSnackbarClose}>
            <Alert icon={false} onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </Snackbar> */}
    </div>
}

export default TableItemExpert;