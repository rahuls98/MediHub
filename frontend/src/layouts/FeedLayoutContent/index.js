import { useState, useEffect } from "react";
import "./style.css";
import Grid from '@mui/material/Grid';
import FeedTrending from "../../components/FeedTrending";
import FeedPost from "../../components/FeedPost";
import FeedSession from "../../components/FeedSession";
import feedApis from "../../apis/feed";
import NoData from "../../components/NoData";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const FeedLayoutContent = () => {
    const [tab, setTab] = useState('1');
    const [posts, setPosts] = useState([]);
    const [sessions, setSessions] = useState([]);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        const getUserFeed = async () => {
            const feed = await feedApis.getUserFeed();
            setPosts(feed.posts);
            setSessions(feed.sessions);
        }
        getUserFeed();
    }, []);

    return <div className="FeedLayoutContent_container">
        <div className="FeedLayoutContent_content" >
            <Grid container spacing={0}>
                <Grid item lg={8}>
                    <TabContext value={tab}>
                        <TabList onChange={handleTabChange}>
                            <Tab label="Posts" value="1" />
                            <Tab label="Sessions" value="2" />
                        </TabList>
                        <TabPanel value="1">
                            {
                                (posts.length === 0)?
                                <NoData />:
                                posts.map(post => <FeedPost key={post._id} post={post._doc} saved={post.saved} />)
                            }
                        </TabPanel>
                        <TabPanel value="2">
                            {
                                (sessions.length === 0)?
                                <NoData />:
                                sessions.map(session => <FeedSession key={session._id} session={session._doc} enrolled={session.enrolled} />)
                            }
                        </TabPanel>
                    </TabContext>
                </Grid>
                <Grid item lg={4}>
                    <FeedTrending />
                </Grid>
            </Grid>
        </div>
    </div>
}

export default FeedLayoutContent;