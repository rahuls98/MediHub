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
import getReadableTimestamp from "../../utils/datetime";
import postApis from "../../apis/post";

const FeedPost = props => {
    const [saved, setSaved] = useState(props.saved);
    const [savedSnackbar, setSavedSnackbar] = useState(false);

    const handleSaveOnClick = async () => {
        if (!saved) {
            setSavedSnackbar(true);
            await postApis.savePost({ post: props.post?._id });
        } else {
            await postApis.unsavePost({ post: props.post?._id });
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
                    <span className="FeedPost_expert_name">{props.post?.author.fullname}</span>
                    {/* <span className="FeedPost_expert_username">{`@${props.email}`}</span> */}
                    <br/>
                    <div className="FeedPost_date">
                        <AccessTimeIcon sx={{ fontSize: 15 }}/> 
                        <span>{getReadableTimestamp(props.post?.createdDate)}</span>
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
                    {
                        props.post?.topics.map((topic, ind) => <TopicChip key={ind} label={topic} />)
                    }
                </Stack>
            </div>
            <p className="FeedPost_content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="FeedPost_vote">
                <div>
                    <ThumbUpAltIcon />
                    <span className="FeedPost_vote_action">Upvote</span>
                    <Chip label={props.post?.upvotes.length} variant="outlined" size="small"/>
                </div>
                <div>
                    <ThumbDownAltIcon />
                    <span className="FeedPost_vote_action">Downvote</span>
                    <Chip label={props.post?.downvotes.length} variant="outlined" size="small"/>
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