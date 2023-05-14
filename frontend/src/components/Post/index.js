import { useState } from "react";
import "./style.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

const Post = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return <div className="Post_container">
        <div className="Post_header">
            <div className="Post_extras">
                <div className="Post_expert_photo"></div>
                <div className="Post_upvotes">
                    <KeyboardArrowUpIcon />
                    <br/ >
                    <span>164</span>
                </div>
            </div>
            <div className="Post_expert_details">
                <span className="Post_expert_name">Name</span>
                <span className="Post_expert_username">@username</span>
                <p className="Post_date">Posted date</p>
                <div className="Post_topics">
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        <Chip label="topic 1" color="primary" />
                        <Chip label="topic 2" color="primary" />
                        <Chip label="topic 2" color="primary" />
                    </Stack>
                </div>
                <p className="Post_content">Long text</p>
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
    </div>
}

export default Post;