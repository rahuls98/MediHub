import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import medicalDictionary from "../../utils/medicalDictionary";
import Autocomplete from '@mui/joy/Autocomplete';

const NavbarSearch = () => {
    return <div className="NavbarSearch_container">
        <Autocomplete
            placeholder="Search"
            freeSolo
            options={medicalDictionary}
            sx={{ width: 400 }}
            startDecorator={<SearchIcon />}
        />
    </div>
}

export default NavbarSearch;