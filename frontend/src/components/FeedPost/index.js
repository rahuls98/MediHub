import { useState } from "react";
import "./style.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

const FeedPost = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return <div className="FeedPost_container">
        <div className="FeedPost_expert_photo"></div>
        <div className="FeedPost_content">
            <div className="FeedPost_header">
                <div>
                    <span className="FeedPost_expert_name">Name</span>
                    <span className="FeedPost_expert_username">@username</span>
                    <p className="FeedPost_date">Posted date</p>
                </div>
                <div className="FeedPost_metrics">
                    <div>
                        <ThumbUpAltIcon />
                        <br/ >
                        <span>164</span>
                    </div>
                    <div style={{width: '10px'}}/>
                    <div>
                        <ThumbDownAltIcon />
                        <br/ >
                        <span>164</span>
                    </div>
                </div>
            </div>
            <div className="FeedPost_topics">
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="topic 1" color="primary" />
                    <Chip label="topic 2" color="primary" />
                    <Chip label="topic 2" color="primary" />
                </Stack>
            </div>
            <p className="FeedPost_content">Long text</p>
            <Stack direction="row" spacing={1}>
                <Button variant="outlined" startIcon={liked?<FavoriteIcon />:<FavoriteBorderIcon />} onClick={() => setLiked(!liked)}>
                    Like
                </Button>
                <Button variant="outlined" startIcon={saved?<BookmarkIcon />:<BookmarkBorderIcon />} onClick={() => setSaved(!saved)}>
                    Save
                </Button>
                <Button variant="contained" startIcon={<ShareIcon />}>
                    Share
                </Button>
            </Stack>
        </div>
    </div>
}

export default FeedPost;