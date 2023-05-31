import "./style.css";
import SessionCard from "../../components/SessionCard";
// import NoData from "../../components/NoData";

const SessionsLayoutContent = () => {
    return <div className="SessionsLayoutContent_container">
        {/* <h2>My sessions</h2> */}
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        {/* <NoData /> */}
    </div>
}

export default SessionsLayoutContent;