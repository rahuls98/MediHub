import './style.css';
import Modal from '@mui/material/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';

const ModalMessage = props => {
    return <div className='ModalMessage_container'>
        <Modal open={props.open} onClose={props.handleClose}>
            <ModalDialog variant="plain">
                <ModalClose />
                <p className='ModalMessage_message'>{props.message}</p>
            </ModalDialog>
        </Modal>
    </div>
}

export default ModalMessage;