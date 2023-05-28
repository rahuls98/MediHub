import "./style.css";
import ListItemButton from '@mui/joy/ListItemButton';

const SidebarMenuItem = props => {
    return <div className="SidebarMenuItem_container">
        <ListItemButton>
            { props.itemIcon }
            <span className="SidebarMenuItem_title">{props.itemTitle}</span>
        </ListItemButton>
    </div>
}

export default SidebarMenuItem;
