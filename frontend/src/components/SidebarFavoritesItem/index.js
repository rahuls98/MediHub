import "./style.css";
import Avatar from '@mui/joy/Avatar';

const SidebarFavoritesItem = props => {
    return <div className="SidebarFavoritesItem_container">
        {
            props.type === "expert"?
            <Avatar /> : <Avatar>#</Avatar>
        }
        <p>{props.title}</p>
    </div>
}

export default SidebarFavoritesItem;