import "./style.css";
import FeedPost from "../../components/FeedPost";
// import NoData from "../../components/NoData";

const SavedLayoutContent = () => {
    return <div className="SavedLayoutContent_container">
        <FeedPost saved />
        <FeedPost saved />
        <FeedPost saved />
        <FeedPost saved />
        {/* <NoData /> */}
    </div>
}

export default SavedLayoutContent;
