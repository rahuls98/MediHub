import {useState, useEffect} from "react";
import './App.css';
import AuthenticationLayout from './layouts/AuthenticationLayout';
import MainLayout from './layouts/MainLayout';
import HmsLayout from './external/Hms';
import ModalMessage from "./components/ModalMessage";
import MessageModalContext from "./utils/MessageModalContext";

const App = () => {
    const [layout, setLayout] = useState(0);
    const [messageModalOpen, setMessageModalOpen] = useState(false);
    const [messageModalContent, setMessageModalContent] = useState(""); 
    const messageModalHandleOpen = () => setMessageModalOpen(true);
    const messageModalHandleClose = () => setMessageModalOpen(false);

    useEffect(() => {
        if (window.localStorage.getItem('user')) {
            setLayout(1);
        }
    }, [])

    const getLayout = () => {
        switch(layout) {
            case 0: return <AuthenticationLayout setLayout={setLayout}/>
            case 1: return <MainLayout setLayout={setLayout}/>
            case 2: return <HmsLayout setLayout={setLayout}/>
            default: return null;
        }
    }

    return (
        <MessageModalContext.Provider 
            value={{
                setMessageModalContent: setMessageModalContent, 
                messageModalHandleOpen: messageModalHandleOpen
            }}>
            <ModalMessage 
            open={messageModalOpen} 
            handleClose={messageModalHandleClose} 
            message={messageModalContent} />
            <div className="App">
                {getLayout()}
            </div>
        </MessageModalContext.Provider>
    );
}

export default App;
