import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import TextEditor from "../TextEditor";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const ModalSessionCreate = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return <div className="ModalSessionCreate_container">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
            <VideoCallOutlinedIcon />
            New session
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalDialog variant="plain">
                <ModalClose />
                <h2 className="ModalSessionCreate_heading">New Session</h2>
                <br />
                <TextEditor />
            </ModalDialog>
      </Modal>
    </div>
}

export default ModalSessionCreate;