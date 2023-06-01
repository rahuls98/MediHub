import "./style.css";
import TableExperts from "../../components/TableExperts";
import TableTopics from "../../components/TableTopics";

const FollowingLayoutContent = () => {
    return <div className="FollowingLayoutContent_container">
        <div className="FollowingLayoutContent_titles">
            <h3>Followed experts</h3>
            <h3>Followed topics</h3>
        </div>
        <div className="FollowingLayoutContent_cards">
            <div className="FollowingLayoutContent_experts">
                <TableExperts />
            </div>
            <div className="FollowingLayoutContent_topics">
                <TableTopics />
            </div>
        </div>
    </div>
}

export default FollowingLayoutContent;
