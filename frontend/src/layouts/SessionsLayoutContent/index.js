import "./style.css";
import SessionCard from "../../components/SessionCard";

const SessionsLayoutContent = () => {
    return <div className="SessionsLayoutContent_container">
        <h2>My sessions</h2>
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
    </div>
}

export default SessionsLayoutContent;