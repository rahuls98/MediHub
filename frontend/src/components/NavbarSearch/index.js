import "./style.css";
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';

const NavbarSearch = () => {
    return <div className="NavbarSearch_container">
        <Input
            size="md"
            sx={{
                "--Input-radius": "25px",
            }}
            fullWidth
            startDecorator={<SearchIcon />}
        />
    </div>
}

export default NavbarSearch;