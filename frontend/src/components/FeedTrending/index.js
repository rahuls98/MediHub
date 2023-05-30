import "./style.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Stack from '@mui/material/Stack';
import TopicChip from "../TopicChip";

const FeedTrending = () => {
    return <div className="FeedTrending_container">
        <div className="FeedTrending_header">
            <span>Trending 30</span>
            <TrendingUpIcon sx={{ fontSize: 16 }} />
        </div>
        <Stack direction="row" flexWrap="wrap">
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
            <TopicChip label="topic 1" />
        </Stack>
    </div>
}

export default FeedTrending;