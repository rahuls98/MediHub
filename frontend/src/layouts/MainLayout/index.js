import "./style.css";
import Sidebar from "../../components/Sidebar";
import Grid from '@mui/material/Grid';
import FeedLayout from "../FeedLayout";

const MainLayout = () => {
    return <div className="MainLayout_container">
        <Grid container spacing={0}>
            <Grid item lg={2}>
               <Sidebar />
            </Grid>
            <Grid className="HomeFeed_Grid" item lg={10}>
                <FeedLayout />
            </Grid>
        </Grid>
    </div>
}

export default MainLayout;