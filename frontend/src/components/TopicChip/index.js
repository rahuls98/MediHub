import { useContext } from "react";
import "./style.css";
import Chip from '@mui/material/Chip';
import TagClickContext from "../../utils/TagClickContext";

const TopicChip = props => {
    const {onTagClick} = useContext(TagClickContext);

    return <div className={"TopicChip_container".concat(props.withMargin? " with_margin":"")}>
        <Chip 
            label={props.label} 
            variant="outlined" 
            size="small" 
            onClick={() => props.onClick ? props.onClick() : onTagClick(props.label)}
            onDelete={props.onDelete ? () => props.onDelete() : null} />
    </div>
}

export default TopicChip;