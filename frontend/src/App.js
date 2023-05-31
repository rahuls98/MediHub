import {useState} from "react";
import './App.css';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import MainLayout from './layouts/MainLayout';
import HmsLayout from './external/Hms';

const App = () => {
    const [layout, setLayout] = useState(1);

    const getLayout = () => {
        switch(layout) {
            case 0: return <AuthenticationLayout />
            case 1: return <MainLayout setLayout={setLayout}/>
            case 2: return <HmsLayout />
            default: return null;
        }
    }

    return (
        <div className="App">
            {getLayout()}
        </div>
    );
}

export default App;
