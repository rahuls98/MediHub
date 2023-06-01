import "./style.css";
import List from '@mui/joy/List';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import SidebarMenuItem from "../SidebarMenuItem";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SidebarMenu = props => {
    return <div className="SidebarMenu_container">
        <List aria-labelledby="basic-list-demo"
            sx={{
                '& [role="button"]': {
                    borderRadius: '8px',
                    marginBottom: '10px',
                },
            }}>
            <SidebarMenuItem 
                itemIcon={<DynamicFeedIcon />} 
                itemTitle="Feed" 
                selected={props.selected===0} 
                onClick={() => props.setSelected(0)} />
            <SidebarMenuItem 
                itemIcon={<VideoCameraFrontOutlinedIcon />} 
                itemTitle="Sessions" 
                selected={props.selected===1} 
                onClick={() => props.setSelected(1)} />
            <SidebarMenuItem 
                itemIcon={<ChecklistRtlOutlinedIcon />} 
                itemTitle="Following" 
                selected={props.selected===2} 
                onClick={() => props.setSelected(2)} />
            <SidebarMenuItem 
                itemIcon={<BookmarkAddedOutlinedIcon />} 
                itemTitle="Saved" 
                selected={props.selected===3} 
                onClick={() => props.setSelected(3)} />
            <SidebarMenuItem 
                itemIcon={<SearchOutlinedIcon />} 
                itemTitle="Explore" 
                selected={props.selected===4} 
                onClick={() => props.setSelected(4)} />
        </List>
    </div>
}

export default SidebarMenu;