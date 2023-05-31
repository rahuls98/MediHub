import { useState } from "react";
import "./style.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import TopicChip from "../TopicChip";

const FeedPost = props => {
    const [saved, setSaved] = useState(props.saved);
    const [savedSnackbar, setSavedSnackbar] = useState(false);

    const handleSaveOnClick = () => {
        if (!saved) {
            setSavedSnackbar(true);
        }
        setSaved(!saved);
    }

    const handleSavedSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSavedSnackbar(false);
    };

    return <div className="FeedPost_container">
        <div className="FeedPost_content">
            <div className="FeedPost_header">
                <div className="FeedPost_expert_photo"></div>
                <div>
                    <span className="FeedPost_expert_name">Name</span>
                    <span className="FeedPost_expert_username">@username</span>
                    <br/>
                    <div className="FeedPost_date">
                        <AccessTimeIcon sx={{ fontSize: 15 }}/> 
                        <span>Posted date</span>
                    </div>
                </div>
                <div className="FeedPost_actions">
                    <span onClick={() => handleSaveOnClick()}>
                        {
                            saved?
                            <BookmarkIcon sx={{ fontSize: 25 }}/>:
                            <BookmarkBorderIcon sx={{ fontSize: 25 }}/>
                        }
                    </span>
                    <ShareIcon sx={{ fontSize: 25 }}/>
                </div>
            </div>
            <div className="FeedPost_topics">
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    <TopicChip label="topic 1" />
                    <TopicChip label="topic 1" />
                    <TopicChip label="topic 1" />
                </Stack>
            </div>
            <p className="FeedPost_content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="FeedPost_vote">
                <div>
                    <ThumbUpAltIcon />
                    <span className="FeedPost_vote_action">Upvote</span>
                    <Chip label="2000" variant="outlined" size="small"/>
                </div>
                <div>
                    <ThumbDownAltIcon />
                    <span className="FeedPost_vote_action">Downvote</span>
                    <Chip label="2000" variant="outlined" size="small"/>
                </div>
            </div>
        </div>
        <Snackbar open={savedSnackbar} autoHideDuration={2000} onClose={handleSavedSnackbarClose}>
            <Alert icon={false} onClose={handleSavedSnackbarClose} severity="info" sx={{ width: '100%' }}>
                Saved post
            </Alert>
        </Snackbar>
    </div>
}

export default FeedPost;