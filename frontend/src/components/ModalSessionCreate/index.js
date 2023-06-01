import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import TopicSearch from "../TopicSearch";
import TopicChip from "../TopicChip";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const ModalSessionCreate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const handleSubmit = () => {
        console.log(title, description, date, time)
    }

    return <div className="ModalSessionCreate_container">
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
            <VideoCallOutlinedIcon />
            New session
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalDialog variant="plain">
                <ModalClose />
                <h2 className="ModalSessionCreate_heading">New Session</h2>
                <TextField
                    label="Title" 
                    variant="outlined" 
                    value={title}
                    onChange={val => setTitle(val.target.value)} />
                <br/>
                <TextField
                    label="Description" 
                    variant="outlined" 
                    value={description}
                    onChange={val => setDescription(val.target.value)} />
                <br/>
                <Stack direction="row" spacing={1}>
                    <DatePicker 
                        label="Date"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}/>
                    <TimePicker 
                        label="Time"
                        value={time}
                        onChange={(newValue) => setTime(newValue)}/>
                </Stack>
                <br/>
                <span className="ModalSessionCreate_label">Relevant topics</span>
                <TopicSearch />
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
                <div className="ModalSessionCreate_actions">
                    <div className="ModalSessionCreate_cancel">
                        <Button variant="outlined">Cancel</Button>
                    </div>
                    <div className="ModalSessionCreate_create">
                        <Button variant="outlined" onClick={() => handleSubmit()}>Create</Button>
                    </div>
                </div>
            </ModalDialog>
      </Modal>
    </div>
}

export default ModalSessionCreate;