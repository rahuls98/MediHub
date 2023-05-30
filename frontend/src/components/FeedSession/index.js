import { useState } from "react";
import "./style.css";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackHandIcon from '@mui/icons-material/BackHand';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ShareIcon from '@mui/icons-material/Share';
import EventIcon from '@mui/icons-material/Event';
import TopicChip from "../TopicChip";

const FeedSession = () => {
    const [enrolled, setEnrolled] = useState(false);
    const [enrolledSnackbar, setEnrolledSnackbar] = useState(false);

    const handleEnrollOnClick = () => {
        if (!enrolled) {
            setEnrolledSnackbar(true);
        }
        setEnrolled(!enrolled);
    }

    const handleEnrolledSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setEnrolledSnackbar(false);
    };


    return <div className="FeedSession_container">
        <div className="FeedSession_content">
            <div className="FeedSession_header">
                <div className="FeedSession_expert_photo"></div>
                <div>
                    <span className="FeedSession_expert_name">Name</span>
                    <span className="FeedSession_expert_username">@username</span>
                    <p className="FeedSession_date">
                        <AccessTimeIcon sx={{ fontSize: 15 }}/> 
                        <span>Posted date</span>
                    </p>
                </div>
                <div className="FeedSession_actions">
                    <span onClick={() => handleEnrollOnClick()}>
                        {
                            enrolled?
                            <BackHandIcon sx={{ fontSize: 25 }}/>:
                            <BackHandOutlinedIcon sx={{ fontSize: 25 }}/>
                        }
                    </span>
                    <ShareIcon sx={{ fontSize: 25 }}/>
                </div>
            </div>
            <div className="FeedSession_topics">
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    <TopicChip label="topic 1" />
                    <TopicChip label="topic 1" />
                    <TopicChip label="topic 1" />
                </Stack>
            </div>
            <h3 className="FeedSession_title">Session: Title</h3>
            <p className="FeedSession_content_text">
                Eget mauris pharetra et ultrices. Leo in vitae turpis massa. Sit amet consectetur adipiscing elit pellentesque habitant. Sit amet massa vitae tortor condimentum. Tortor aliquam nulla facilisi cras fermentum odio eu. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Dignissim sodales ut eu sem integer vitae justo. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Donec pretium vulputate sapien nec.
            </p>
            <div className="FeedSession_when">
                <EventIcon /> 
                <span>When</span>
            </div>
        </div>
        <Snackbar open={enrolledSnackbar} autoHideDuration={2000} onClose={handleEnrolledSnackbarClose}>
            <Alert icon={false} onClose={handleEnrolledSnackbarClose} severity="info" sx={{ width: '100%' }}>
                Enrolled in session
            </Alert>
        </Snackbar>
    </div>
}

export default FeedSession;