import { useState } from "react";
import "./style.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import TopicChip from "../TopicChip";
import datetimeUtils from "../../utils/datetime";
import postApis from "../../apis/post";

const FeedPost = props => {
    const [saved, setSaved] = useState(props.saved || false);
    const [upvoted, setUpvoted] = useState(props.upvoted || false);
    const [upvotes, setUpvotes] = useState(props.post?.upvotes.length || 0);
    const [downvoted, setDownvoted] = useState(props.downvoted || false);
    const [downvotes, setDownvotes] = useState(props.post?.downvotes.length || 0);
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

    const handleVoteOnClick = async (action) => {
        if (action === "upvote") {
            if (upvoted) {
                setUpvoted(false);
                setUpvotes(upvotes-1);
                return
            } else if (downvoted) {
                setDownvoted(false);
                setDownvotes(downvotes-1);
            } 
            setUpvoted(true);
            setUpvotes(upvotes+1)
        } else if (action === "downvote") {
            if (downvoted) {
                setDownvoted(false);
                setDownvotes(downvotes-1);
                return
            } else if (upvoted) {
                setUpvoted(false);
                setUpvotes(upvotes-1)
            } 
            setDownvoted(true);
            setDownvotes(downvotes+1);
        }
    }

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
                        <span>{
                            `${datetimeUtils.dateToReadableString(props.post?.createdDate)}, ${datetimeUtils.timeToReadableString(props.post?.createdDate)}`
                        }</span>
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
            <div className="FeedPost_content_text" dangerouslySetInnerHTML={{__html: props.post?.content}} />
            <div className="FeedPost_vote">
                <div>
                    <div className={"FeedPost_vote_clickable".concat(upvoted?" selected":"")} onClick={() => handleVoteOnClick("upvote")}>
                        {upvoted?<ThumbUpAltIcon />:<ThumbUpAltOutlinedIcon />}
                        {<span className="FeedPost_vote_action">Upvote</span>}
                    </div>
                    <Chip label={upvotes} variant="outlined" size="small"/>
                </div>
                <div>
                    <div className={"FeedPost_vote_clickable".concat(downvoted?" selected":"")} onClick={() => handleVoteOnClick("downvote")}>
                        {downvoted?<ThumbDownAltIcon />:<ThumbDownAltOutlinedIcon />}
                        {<span className="FeedPost_vote_action">Downvote</span>}
                    </div>
                    <Chip label={downvotes} variant="outlined" size="small"/>
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