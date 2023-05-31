import "./style.css";
import Chip from '@mui/material/Chip';

const TopicChip = props => {
    return <div className={"TopicChip_container".concat(props.withMargin? " with_margin":"")}>
        <Chip label={props.label} variant="outlined" size="small" />
    </div>
}

export default TopicChip;