import "./style.css";
import Stack from '@mui/material/Stack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BackHandIcon from '@mui/icons-material/BackHand';
import ShareIcon from '@mui/icons-material/Share';
import EventIcon from '@mui/icons-material/Event';
import TopicChip from "../TopicChip";

const FeedSession = () => {

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
                    <BackHandIcon sx={{ fontSize: 25 }}/>
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
    </div>
}

export default FeedSession;