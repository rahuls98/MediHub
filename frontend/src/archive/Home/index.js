import "./style.css";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import HomeFeed from "../../components/HomeFeed";
import HomeProfile from "../../components/HomeProfile";
import HomeSuggested from "../../components/HomeSuggested";
// import HomeFavorites from "../../components/HomeFavorites";

const HomeLayout = () => {
    return <div className="HomeLayout_container">
        <div className="HomeLayout_appbar">
            <span>MediHub</span>
            <div style={{width: '20px'}}></div>
            <TextField
                id="outlined-uncontrolled"
                size="small"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </div>
        <Grid container spacing={0}>
            <Grid item lg={3}>
               <HomeProfile />
            </Grid>
            <Grid className="HomeFeed_Grid" item lg={6}>
                <HomeFeed />
            </Grid>
            <Grid item lg={3}>
                <HomeSuggested />
            </Grid>
        </Grid>
    </div>
}

export default HomeLayout;