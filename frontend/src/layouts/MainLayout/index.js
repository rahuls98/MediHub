import { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar";
import FeedLayoutContent from "../FeedLayoutContent";
import SessionsLayoutContent from "../SessionsLayoutContent";
import SavedLayoutContent from "../SavedLayoutContent";
import FollowingLayoutContent from "../FollowingLayoutContent";

const MainLayout = () => {
    // eslint-disable-next-line
    const [layoutContent, setLayoutContent] = useState('following');

    const getNavbarCreateOption = () => {
        switch (layoutContent) {
            case 'feed': return 'post';
            case 'sessions': return 'session';
            default: return null;
        }
    }

    const getLayoutContent = () => {
        switch (layoutContent) {
            case 'feed': return <FeedLayoutContent />
            case 'sessions': return <SessionsLayoutContent />
            case 'saved': return <SavedLayoutContent />
            case 'following': return <FollowingLayoutContent />
            default: return;
        }
    }

    return <div className="MainLayout_container">
        <Grid container spacing={0}>
            <Grid item lg={2}>
               <Sidebar />
            </Grid>
            <Grid item lg={10}>
                <Navbar createOption={getNavbarCreateOption()} />
                { getLayoutContent() }
            </Grid>
        </Grid>
    </div>
}

export default MainLayout;