import "./style.css";
import SidebarFavoritesItem from "../SidebarFavoritesItem";

const SidebarFavorites = () => {
    return <div className="SidebarFavorites_container">
        <span>Favorites</span>
        <SidebarFavoritesItem type="expert" title="Expert 1"/>
        <SidebarFavoritesItem type="expert" title="Expert 2"/>
        <SidebarFavoritesItem type="expert" title="Expert 3"/>
        <SidebarFavoritesItem type="topic" title="Topic 1"/>
        <SidebarFavoritesItem type="topic" title="Topic 2"/>
        <SidebarFavoritesItem type="topic" title="Topic 3"/>
    </div>
}

export default SidebarFavorites;