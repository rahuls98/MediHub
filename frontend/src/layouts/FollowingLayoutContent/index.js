import {useState} from "react";
import "./style.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "../../components/TabPanel";
import FollowingTableExperts from "../../components/FollowingTableExperts";
import FollowingTableTopics from "../../components/FollowingTableTopics";

const FollowingLayoutContent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return <div className="FollowingLayoutContent_container">
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Experts" />
            <Tab label="Topics" />
        </Tabs>
        <TabPanel value={value} index={0} style={{height: '100%'}}>
            <FollowingTableExperts />
        </TabPanel>
        <TabPanel value={value} index={1} style={{height: '100%'}}>
            <FollowingTableTopics />
        </TabPanel>
    </div>
}

export default FollowingLayoutContent;
