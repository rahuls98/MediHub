import "./style.css";
import List from '@mui/joy/List';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SidebarMenuItem from "../SidebarMenuItem";

const SidebarMenu = () => {
    return <div className="SidebarMenu_container">
        <List aria-labelledby="basic-list-demo"
            sx={{
                '& [role="button"]': {
                    borderRadius: '8px',
                    marginBottom: '10px',
                },
            }}>
            <SidebarMenuItem itemIcon={<DynamicFeedIcon />} itemTitle="Feed" />
            <SidebarMenuItem itemIcon={<VideoCameraFrontIcon />} itemTitle="Sessions" />
            <SidebarMenuItem itemIcon={<PersonIcon />} itemTitle="Following" />
            <SidebarMenuItem itemIcon={<BookmarkAddedIcon />} itemTitle="Saved" />
        </List>
    </div>
}

export default SidebarMenu;