import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';

const PostCreateModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return <div className="PostCreateModal">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
            New post
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalDialog variant="plain">
                <ModalClose />
                Test
            </ModalDialog>
      </Modal>
    </div>
}

export default PostCreateModal;