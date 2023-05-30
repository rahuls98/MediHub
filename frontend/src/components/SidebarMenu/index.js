import {useState} from "react";
import "./style.css";
import List from '@mui/joy/List';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SidebarMenuItem from "../SidebarMenuItem";

const SidebarMenu = () => {
    const [selected, setSelected] = useState(0);

    return <div className="SidebarMenu_container">
        <List aria-labelledby="basic-list-demo"
            sx={{
                '& [role="button"]': {
                    borderRadius: '8px',
                    marginBottom: '10px',
                },
            }}>
            <SidebarMenuItem itemIcon={<DynamicFeedIcon />} itemTitle="Feed" selected={selected===0} onClick={() => setSelected(0)} />
            <SidebarMenuItem itemIcon={<VideoCameraFrontIcon />} itemTitle="Sessions" selected={selected===1} onClick={() => setSelected(1)} />
            <SidebarMenuItem itemIcon={<PersonIcon />} itemTitle="Following" selected={selected===2} onClick={() => setSelected(2)} />
            <SidebarMenuItem itemIcon={<BookmarkAddedIcon />} itemTitle="Saved" selected={selected===3} onClick={() => setSelected(3)} />
        </List>
    </div>
}

export default SidebarMenu;