import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import medicalDictionary from "../../utils/medicalDictionary";
import medicalAbbreviations from "../../utils/medicalAbbreviations";
import Autocomplete, {createFilterOptions} from '@mui/joy/Autocomplete';

const searchOptions = [...medicalDictionary, ...medicalAbbreviations];

const TopicSearch = () => {
    return <div className="TopicSearch_container">
        <Autocomplete
            placeholder="Search"
            freeSolo
            options={searchOptions}
            filterOptions={createFilterOptions({
                matchFrom: 'any',
                limit: 500,
            })}
            // sx={{ width: 400 }}
            startDecorator={<SearchIcon />}
        />
    </div>
}

export default TopicSearch;