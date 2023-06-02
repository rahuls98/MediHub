import { useState, useEffect } from "react";
import "./style.css";
import SessionCard from "../../components/SessionCard";
import sessionApis from "../../apis/session";
import NoData from "../../components/NoData";

const SessionsLayoutContent = props => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const getEnrolledSessions = async () => {
            const enrolledSessions = await sessionApis.getEnrolledSessions();
            console.log(enrolledSessions);
            setSessions(enrolledSessions);
        };
        getEnrolledSessions();
    }, [])

    return <div className="SessionsLayoutContent_container">
        {
            (sessions.length === 0)? 
            <NoData />:
            sessions.map((session, ind) => <SessionCard key={ind} session={session} />)
        }
    </div>
}

export default SessionsLayoutContent;