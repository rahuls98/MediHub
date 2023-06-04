import React from "react";
import "./style.css";
import List from '@mui/material/List';
import TableItemTopic from "../TableItemTopic";
import NoData from "../NoData";

const TableTopics = props => {
    return <div className={"TableTopics_container".concat(
        (props.data === undefined || props.data.length === 0)? "": " not_empty"
    )}>
        {
            (props.data === undefined || props.data.length === 0)?
            <NoData />:
            <List sx={{ width: '100%' }}>
                {
                    props.data.map((topic, ind) => 
                    <TableItemTopic
                        key={topic._id}
                        topicId={topic._id}
                        lastItem={ind === props.data.length-1}
                        following={props.following}
                        topic={topic.title} />)
                }
            </List>
        }
    </div>
}

export default TableTopics;