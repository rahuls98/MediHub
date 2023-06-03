import "./style.css";
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
// import JoinRoom from './JoinRoom'
import CircularProgress from '@mui/material/CircularProgress';
import Room from './Room';

const Hms = props => {
    // eslint-disable-next-line
    const isConnected = useHMSStore(selectIsConnectedToRoom)

    return (
        <div className="Hms_container"> 
        {   
            isConnected
            ? <Room setLayout={props.setLayout} />
            : <div className="Hms_spinner"><CircularProgress /></div>
            // : <JoinRoom />
        }
        </div>
    );
}

export default Hms;