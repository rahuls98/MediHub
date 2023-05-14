import "./style.css";
import Grid from '@mui/material/Grid';
import HomeFeed from "../../components/HomeFeed";
import HomeProfile from "../../components/HomeProfile";
import HomeSuggested from "../../components/HomeSuggested";
import HomeFavorites from "../../components/HomeFavorites";

const HomeLayout = () => {
    return <div>
        <Grid container>
            <Grid item lg={3}>
               <HomeProfile />
               <div style={{height:'10px'}} />
               <HomeFavorites />
            </Grid>
            <Grid item lg={6}>
                <HomeFeed />
            </Grid>
            <Grid item lg={3}>
                <HomeSuggested />
            </Grid>
        </Grid>
    </div>
}

export default HomeLayout;