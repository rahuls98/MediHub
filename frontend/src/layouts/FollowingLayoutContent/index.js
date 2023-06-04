import { useState, useEffect } from "react";
import "./style.css";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TableExperts from "../../components/TableExperts";
import TableTopics from "../../components/TableTopics";
import followingApis from "../../apis/following";

const FollowingLayoutContent = () => {
    const [tab, setTab] = useState('1');
    const [experts, setExperts] = useState([]);
    const [topics, setTopics] = useState([]);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        const getFollowingExperts = async () => {
            const experts = await followingApis.getFollowingExperts();
            setExperts(experts);
        }
        const getFollowingTopics = async () => {
            const topics = await followingApis.getFollowingTopics();
            setTopics(topics);
        }
        getFollowingExperts();
        getFollowingTopics();
    }, []);

    return <div className="FollowingLayoutContent_container">
        <div className="FollowingLayoutContent_cards">
            <TabContext value={tab}>
                <TabList onChange={handleTabChange}>
                    <Tab label="Experts" value="1" />
                    <Tab label="Topics" value="2" />
                </TabList>
                <TabPanel value="1"><TableExperts data={experts} following={true} /></TabPanel>
                <TabPanel value="2"><TableTopics data={topics} following={true} /></TabPanel>
            </TabContext>
        </div>
    </div>
}

export default FollowingLayoutContent;
