import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SidebarFavoritesItem from "../SidebarFavoritesItem";

const FeedTrending = () => {
    return <div className="FeedTrending_container">
        <span>Trending</span>
        <TrendingUpIcon />
        <SidebarFavoritesItem type="topic" title="Topic 1"/>
        <SidebarFavoritesItem type="topic" title="Topic 2"/>
        <SidebarFavoritesItem type="topic" title="Topic 3"/>
        <SidebarFavoritesItem type="topic" title="Topic 4"/>
        <SidebarFavoritesItem type="topic" title="Topic 5"/>
        <SidebarFavoritesItem type="topic" title="Topic 6"/>
    </div>
}

export default FeedTrending;