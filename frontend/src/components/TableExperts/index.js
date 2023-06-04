import React from "react";
import "./style.css";
import List from '@mui/material/List';
import TableItemExpert from "../TableItemExpert";
import NoData from "../NoData";

const TableExperts = props => {
    return <div className={"TableExperts_container".concat(
        (props.data === undefined || props.data.length === 0)? "": " not_empty"
    )}>
        {
            (props.data === undefined || props.data.length === 0)?
            <NoData />:
            <List sx={{ width: '100%' }}>
                {
                    
                    props.data.map((expert, ind) => 
                    <TableItemExpert 
                        key={expert._id} 
                        expertId={expert._id}
                        lastItem={ind === props.data.length-1}
                        following={props.following}
                        fullname={expert.fullname} 
                        followerCount={expert.followerCount}
                        expertiseTopics={expert.expertiseTopics} />)
                }
            </List>
        }
    </div>
}

export default TableExperts;