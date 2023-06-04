import { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar";
import FeedLayoutContent from "../FeedLayoutContent";
import SessionsLayoutContent from "../SessionsLayoutContent";
import SavedLayoutContent from "../SavedLayoutContent";
import FollowingLayoutContent from "../FollowingLayoutContent";
import ExploreLayout from "../ExploreLayout";

const MainLayout = props => {
    const [selected, setSelected] = useState(0);
    const [layoutContent, setLayoutContent] = useState('feed');
    const [searchString, setSearchString] = useState("");

    const handleMenuSelection = ind => {
        setSearchString("")
        setSelected(ind);
        switch(ind) {
            case 0: setLayoutContent('feed'); break;
            case 1: setLayoutContent('sessions'); break;
            case 2: setLayoutContent('following'); break;
            case 3: setLayoutContent('saved'); break;
            case 4: setLayoutContent('explore'); break;
            default: break;
        }
    }

    const getNavbarOptions = () => {
        let navbarOptions = {
            withSearch: false,
            createOption: null
        }
        switch (layoutContent) {
            case 'feed': 
                navbarOptions.createOption = 'post';
                break;
            case 'sessions': 
                navbarOptions.createOption = 'session';
                break;
            case 'saved': 
                break;
            case 'following': 
                break;
            case 'explore':
                navbarOptions.withSearch = true;
                break;
            default: break;
        }
        return navbarOptions;
    }

    const getLayoutContent = () => {
        switch (layoutContent) {
            case 'feed': return <FeedLayoutContent />
            case 'sessions': return <SessionsLayoutContent setLayout={props.setLayout}/>
            case 'saved': return <SavedLayoutContent />
            case 'following': return <FollowingLayoutContent />
            case 'explore': return <ExploreLayout searchString={searchString}/>
            default: return;
        }
    }

    return <div className="MainLayout_container">
        <Grid container spacing={0}>
            <Grid item lg={2}>
               <Sidebar selected={selected} setSelected={handleMenuSelection}/>
            </Grid>
            <Grid item lg={10}>
                <Navbar {...getNavbarOptions()} 
                    setSearchString={setSearchString} 
                    onSearchClose={() => setSearchString("")} 
                    setLayout={props.setLayout} />
                { getLayoutContent() }
            </Grid>
        </Grid>
    </div>
}

export default MainLayout;