import { useState, useEffect } from "react";
import "./style.css";
import Grid from '@mui/material/Grid';
import FeedTrending from "../../components/FeedTrending";
import FeedPost from "../../components/FeedPost";
import FeedSession from "../../components/FeedSession";
import feedApis from "../../apis/feed";
// import NoData from "../../components/NoData";

const FeedLayoutContent = () => {
    const [posts, setPosts] = useState([]);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const getUserFeed = async () => {
            const feed = await feedApis.getUserFeed();
            console.log("Feed", feed);
            setPosts(feed.posts);
            setSessions(feed.sessions);
        }
        getUserFeed();
    }, []);

    return <div className="FeedLayoutContent_container">
        <div className="FeedLayoutContent_content" >
            <Grid container spacing={0}>
                <Grid item lg={8}>
                    {
                        posts?.map(post => <FeedPost key={post._id} post={post._doc} saved={post.saved} />)
                    }
                    {
                        sessions?.map(session => <FeedSession key={session._id} session={session._doc} enrolled={session.enrolled} />)
                    }
                    {/* <NoData /> */}
                </Grid>
                <Grid item lg={4}>
                    <FeedTrending />
                </Grid>
            </Grid>
        </div>
    </div>
}

export default FeedLayoutContent;