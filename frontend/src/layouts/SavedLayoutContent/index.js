import "./style.css";
import FeedPost from "../../components/FeedPost";
import FeedSession from "../../components/FeedSession";

const SavedLayoutContent = () => {
    return <div className="SavedLayoutContent_container">
        <FeedPost />
        <FeedSession />
        <FeedPost />
        <FeedSession />
        <FeedPost />
        <FeedSession />
        <FeedPost />
    </div>
}

export default SavedLayoutContent;
