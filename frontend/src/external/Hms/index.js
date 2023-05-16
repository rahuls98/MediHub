import "./style.css";
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
import JoinRoom from './JoinRoom'
import Room from './Room';

const Hms = () => {
    const isConnected = useHMSStore(selectIsConnectedToRoom)

    return (
        <div className="App wrapper"> 
        {isConnected
            ? <Room />
            : <JoinRoom />
        }
        </div>
    );
}

export default Hms;