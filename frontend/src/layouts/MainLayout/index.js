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
    const [layoutContent, setLayoutContent] = useState('feed');

    const getNavbarOptions = () => {
        let navbarOptions = {
            withSearch: false,
            createOption: null
        }
        switch (layoutContent) {
            case 'feed': 
                navbarOptions.withSearch = true;
                navbarOptions.createOption = 'feed';
                break;
            case 'sessions': 
                navbarOptions.withSearch = true;
                navbarOptions.createOption = 'session';
                break;
            default: break;
        }
        return navbarOptions;
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
                <Navbar {...getNavbarOptions()} />
                { getLayoutContent() }
            </Grid>
        </Grid>
    </div>
}

export default MainLayout;