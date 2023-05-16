import "./style.css";
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const SidebarMenu = () => {
    return <div className="SidebarMenu_container">
        <List aria-labelledby="basic-list-demo"
            sx={{
                '& [role="button"]': {
                    borderRadius: '8px',
                    marginBottom: '10px',
                },
            }}>
            <ListItemButton><DynamicFeedIcon />Feed</ListItemButton>
            <ListItemButton><VideoCameraFrontIcon />Sessions</ListItemButton>
            <ListItemButton><PersonIcon />Following</ListItemButton>
            <ListItemButton><BookmarkAddedIcon />Saved</ListItemButton>
        </List>
    </div>
}

export default SidebarMenu;