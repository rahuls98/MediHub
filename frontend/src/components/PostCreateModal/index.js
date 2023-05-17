import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import TextEditor from "../TextEditor";

const PostCreateModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return <div className="PostCreateModal_container">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
            New post
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalDialog variant="plain">
                <ModalClose />
                <h2 className="PostCreateModal_heading">New post</h2>
                <br />
                <TextEditor />
            </ModalDialog>
      </Modal>
    </div>
}

export default PostCreateModal;