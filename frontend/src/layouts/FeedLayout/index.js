import "./style.css";
import Navbar from "../../components/Navbar";
import Grid from '@mui/material/Grid';
import FeedTrending from "../../components/FeedTrending";
import Post from "../../components/Post";

const FeedLayout = () => {
    return <div className="FeedLayout_container">
        <Navbar />
        <div className="FeedLayout_content" >
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

export default FeedLayout;