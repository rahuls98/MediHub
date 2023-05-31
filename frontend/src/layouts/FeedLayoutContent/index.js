import "./style.css";
import Grid from '@mui/material/Grid';
import FeedTrending from "../../components/FeedTrending";
import FeedPost from "../../components/FeedPost";
import FeedSession from "../../components/FeedSession";
// import NoData from "../../components/NoData";

const FeedLayoutContent = () => {
    return <div className="FeedLayoutContent_container">
        <div className="FeedLayoutContent_content" >
            <Grid container spacing={0}>
                <Grid item lg={8}>
                    <FeedPost />
                    <FeedSession />
                    <FeedPost />
                    <FeedSession />
                    <FeedPost />
                    <FeedSession />
                    <FeedPost />
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