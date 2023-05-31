import React from "react";
import "./style.css";
import List from '@mui/material/List';
import FollowingItemTopic from "../FollowingItemTopic";
// import NoData from "../NoData";

const FollowingTableTopics = () => {
    return <div className="FollowingTableTopics_container">
        <List sx={{ width: '100%' }}>
            <FollowingItemTopic />
            <FollowingItemTopic />
            <FollowingItemTopic />
        </List>
        {/* <NoData /> */}
    </div>
}

export default FollowingTableTopics;