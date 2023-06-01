import { useState, useEffect } from "react";
import "./style.css";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TableExperts from "../../components/TableExperts";
import TableTopics from "../../components/TableTopics";
import expertApis from "../../apis/expert";
import topicApis from "../../apis/topic";
import postApis from "../../apis/post";
import sessionApis from "../../apis/session";
import FeedPost from "../../components/FeedPost";
import SessionCard from "../../components/SessionCard";
import NoData from "../../components/NoData";

const ExploreLayout = () => {
    const [tab, setTab] = useState('1');
    const [experts, setExperts] = useState([]);
    const [topics, setTopics] = useState([]);
    const [posts, setPosts] = useState([]);
    const [sessions, setSessions] = useState([]);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        const getAllExperts = async () => {
            const experts = await expertApis.getAllExperts();
            setExperts(experts);
        }
        const getAllTopics = async () => {
            const topics = await topicApis.getAllTopics();
            setTopics(topics);
        }
        const getAllPosts = async () => {
            const experts = await postApis.getAllPosts();
            setPosts(experts);
        }
        const getAllSessions = async () => {
            const topics = await sessionApis.getAllSessions();
            setSessions(topics);
        }
        getAllExperts();
        getAllTopics();
        getAllPosts();
        getAllSessions();
    }, []);

    return <div className="ExploreLayout_container">
        <TabContext value={tab}>
            <TabList onChange={handleTabChange}>
                <Tab label="Experts" value="1" />
                <Tab label="Topics" value="2" />
                <Tab label="Posts" value="3" />
                <Tab label="Sessions" value="4" />
            </TabList>
            <TabPanel value="1"><TableExperts data={experts} /></TabPanel>
            <TabPanel value="2"><TableTopics data={topics} /></TabPanel>
            <TabPanel value="3">
                {
                    (posts.length === 0)?
                    <NoData />:
                    posts.map(post => <FeedPost key={post._id} />)
                }
            </TabPanel>
            <TabPanel value="4">
                {
                    (sessions.length === 0)?
                    <NoData />:
                    sessions.map(session => <SessionCard key={session._id} />)
                }
            </TabPanel>
        </TabContext>
    </div>
}

export default ExploreLayout;