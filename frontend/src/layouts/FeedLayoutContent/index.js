import "./style.css";
import Grid from '@mui/material/Grid';
import FeedTrending from "../../components/FeedTrending";
import Post from "../../components/Post";

const FeedLayoutContent = () => {
    return <div className="FeedLayoutContent_container">
        <div className="FeedLayoutContent_content" >
            <Grid container spacing={0}>
                <Grid item lg={8}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Grid>
                <Grid item lg={4}>
                    <FeedTrending />
                </Grid>
            </Grid>
        </div>
    </div>
}

export default FeedLayoutContent;