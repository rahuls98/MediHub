import "./style.css";
import SessionCard from "../../components/SessionCard";
// import NoData from "../../components/NoData";

const SessionsLayoutContent = props => {
    return <div className="SessionsLayoutContent_container">
        {/* <h2>My sessions</h2> */}
        <SessionCard setLayout={props.setLayout} />
        <SessionCard setLayout={props.setLayout} />
        <SessionCard setLayout={props.setLayout} />
        <SessionCard setLayout={props.setLayout} />
        {/* <NoData /> */}
    </div>
}

export default SessionsLayoutContent;