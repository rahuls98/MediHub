import { useState } from "react";
import "./style.css";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import TextEditor from "../TextEditor";
import EditNoteIcon from '@mui/icons-material/EditNote';
import TopicSearch from "../TopicSearch";
import TopicChip from "../TopicChip";
import postApis from "../../apis/post";
import userUtils from "../../utils/user";

const ModalPostCreate = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editorValue, setEditorValue] = useState('');
    const [topics, setTopics] = useState([]);

    const handleTopicSelection = (selected) => {
        setTopics([...topics, selected]);
    }

    const handleTopicDeletion = (ind) => {
        let updatedTopics = [...topics];
        updatedTopics.splice(ind, 1);
        setTopics(updatedTopics);
    }

    const handleSubmit = async () => {
        const createResponse = await postApis.createPost({
            content: editorValue.toString(),
            topics: topics
        });
        if (createResponse.msg !== "Success!") {
            alert(createResponse.msg)
        } else {
            setModalOpen(false);
        }
    }

    return <div className="ModalPostCreate_container">
        <Button 
            variant="outlined" 
            onClick={() => setModalOpen(true)}
            disabled={
                userUtils.getRole() === "Expert"?
                   userUtils.getExpertIsVerified()? false : true   
                : false
            }
        >
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
                <span className="ModalPostCreate_label">Relevant topics</span>
                <TopicSearch onSelect={handleTopicSelection} />
                <div className="ModalPostCreate_chips">
                    {
                        topics?.map((topic, index) => <TopicChip 
                            key={index}
                            label={topic} 
                            withMargin 
                            onDelete={() => handleTopicDeletion(index)}/>)
                    }
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