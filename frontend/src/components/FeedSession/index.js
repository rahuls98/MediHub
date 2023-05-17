import "./style.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BackHandIcon from '@mui/icons-material/BackHand';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';

const FeedSession = () => {

    return <div className="FeedSession_container">
        <div className="FeedSession_expert_photo"></div>
        <div className="FeedSession_content">
            <div className="FeedSession_header">
                <div>
                    <span className="FeedSession_expert_name">Name</span>
                    <span className="FeedSession_expert_username">@username</span>
                    <p className="FeedSession_date">Posted date</p>
                </div>
            </div>
            <div className="FeedSession_topics">
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="topic 1" color="primary" />
                    <Chip label="topic 2" color="primary" />
                    <Chip label="topic 2" color="primary" />
                </Stack>
            </div>
            <p className="FeedSession_content">About session</p>
            <p><ScheduleIcon /> When</p>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" startIcon={<BackHandIcon />}>
                    Interested
                </Button>
                <Button variant="contained" startIcon={<ShareIcon />}>
                    Share
                </Button>
            </Stack>
        </div>
    </div>
}

export default FeedSession;