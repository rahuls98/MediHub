import React from "react";
import "./style.css";
import List from '@mui/material/List';
import FollowingItemExpert from "../FollowingItemExpert";
// import NoData from "../NoData";

const FollowingTableExperts = () => {
    return <div className="FollowingTableExperts_container">
        <List sx={{ width: '100%' }}>
            <FollowingItemExpert />
            <FollowingItemExpert />
            <FollowingItemExpert />
        </List>
        {/* <NoData /> */}
    </div>
}

export default FollowingTableExperts;