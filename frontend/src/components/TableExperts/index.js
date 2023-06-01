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
                        key={ind} 
                        lastItem={ind === props.data.length-1}
                        initialAction="Follow"
                        fullname={expert.fullname} 
                        expertiseTopics={expert.expertiseTopics} />)
                }
            </List>
        }
    </div>
}

export default TableExperts;