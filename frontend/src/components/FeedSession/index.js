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
import sessionApis from "../../apis/session";
import datetimeUtils from "../../utils/datetime";

const FeedSession = props => {
    const [enrolled, setEnrolled] = useState(false);
    const [enrolledSnackbar, setEnrolledSnackbar] = useState(false);

    const handleEnrollOnClick = async () => {
        if (!enrolled) {
            setEnrolledSnackbar(true);
            await sessionApis.enrollInSession({session: props.session._id});
        } else {
            await sessionApis.unenrollInSession({session: props.session._id});
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
                    <span className="FeedSession_expert_name">{props.session.author.fullname}</span>
                    {/* <span className="FeedSession_expert_username">@username</span> */}
                    <p className="FeedSession_date">
                        <AccessTimeIcon sx={{ fontSize: 15 }}/> 
                        <span>
                        {`${datetimeUtils.dateToReadableString(props.session?.createdDate)}, ${datetimeUtils.timeToReadableString(props.session?.createdDate)}`}
                        </span>
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
                    {
                        props.session.topics.map((topic, ind) => <TopicChip key={ind} label={topic} />)
                    }
                </Stack>
            </div>
            <h3 className="FeedSession_title">Session: {props.session.title}</h3>
            <p className="FeedSession_content_text">
                {props.session.description}
            </p>
            <div className="FeedSession_when">
                <EventIcon /> 
                <span>{`${props.session.sessionDate}, ${props.session.sessionTime}`}</span>
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