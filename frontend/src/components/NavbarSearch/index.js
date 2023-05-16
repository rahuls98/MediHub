import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import medicalDictionary from "../../utils/medicalDictionary";
import medicalAbbreviations from "../../utils/medicalAbbreviations";
import Autocomplete from '@mui/joy/Autocomplete';

const searchOptions = [...medicalDictionary, ...medicalAbbreviations];

const NavbarSearch = () => {
    return <div className="NavbarSearch_container">
        <Autocomplete
            placeholder="Search"
            freeSolo
            options={searchOptions}
            sx={{ width: 400 }}
            startDecorator={<SearchIcon />}
        />
    </div>
}

export default NavbarSearch;