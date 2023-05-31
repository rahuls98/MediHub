import "./style.css";
import Chip from '@mui/material/Chip';

const TopicChip = props => {
    return <div className={"TopicChip_container".concat(props.withMargin? " with_margin":"")}>
        <Chip 
            label={props.label} 
            variant="outlined" 
            size="small" 
            onClick={props.onClick ? () => props.onClick() : null}
            onDelete={props.onDelete ? () => props.onDelete() : null} />
    </div>
}

export default TopicChip;