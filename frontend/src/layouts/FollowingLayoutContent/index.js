import "./style.css";
import FollowingTableExperts from "../../components/FollowingTableExperts";
import FollowingTableTopics from "../../components/FollowingTableTopics";

const FollowingLayoutContent = () => {
    return <div className="FollowingLayoutContent_container">
        <div className="FollowingLayoutContent_titles">
            <h3>Followed experts</h3>
            <h3>Followed topics</h3>
        </div>
        <div className="FollowingLayoutContent_cards">
            <div className="FollowingLayoutContent_experts">
                <FollowingTableExperts />
            </div>
            <div className="FollowingLayoutContent_topics">
                <FollowingTableTopics />
            </div>
        </div>
    </div>
}

export default FollowingLayoutContent;
