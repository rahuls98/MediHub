import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import TextEditor from "../TextEditor";
import EditNoteIcon from '@mui/icons-material/EditNote';
import NavbarSearch from "../NavbarSearch";
import TopicChip from "../TopicChip";

const ModalPostCreate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editorValue, setEditorValue] = useState('');

    const handleSubmit = () => {
        console.log(editorValue);
    }

    return <div className="ModalPostCreate_container">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
            <EditNoteIcon />
            New post
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalDialog variant="plain">
                <ModalClose />
                <h2 className="ModalPostCreate_heading">New post</h2>
                <span className="ModalPostCreate_label">What's on your mind?</span>
                <TextEditor editorValue={editorValue} setEditorValue={setEditorValue} />
                <br/>
                <span className="ModalPostCreate_label">Relevant tags</span>
                <NavbarSearch />
                <div className="ModalPostCreate_chips">
                    <TopicChip label="Item 1" withMargin onDelete={() => {}}/>
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 1" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 2" withMargin onDelete={() => {}} />
                    <TopicChip label="Item 3" withMargin onDelete={() => {}} />
                </div>
                <div className="ModalPostCreate_actions">
                    <div className="ModalPostCreate_cancel">
                        <Button variant="outlined">Cancel</Button>
                    </div>
                    <div className="ModalPostCreate_post">
                        <Button variant="outlined" onClick={() => handleSubmit()}>Post</Button>
                    </div>
                </div>
            </ModalDialog>
      </Modal>
    </div>
}

export default ModalPostCreate;