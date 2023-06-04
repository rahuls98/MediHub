import { useState } from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VerticalSpace from "../../components/VerticalSpace";
import authenticationApis from "../../apis/authentication";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const FormSignup = props => {
    const [role, setRole] = useState("User");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignupSubmit = async () => {
        setFullnameError(false);
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        if (fullname === "") {
            setFullnameError(true);
        }
        if (email === "") {
            setEmailError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }
        if (confirmPassword === "") {
            setConfirmPasswordError(true);
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (fullname && email && password && confirmPassword) {
            const userData = {fullname, email, password, role}
            const response = await authenticationApis.signupUser(userData);
            if (!response.success) {
                alert(response.message);
            } else {
                props.setForm(0);
            }
        }
    }

    return <div className="FormSignup_container">
        <h1>Welcome!</h1>
        <p>Please enter your details.</p>
        <VerticalSpace size={30} />
        <FormControl>
            <FormLabel>Role</FormLabel>
            <RadioGroup row defaultValue="User" onChange={e => setRole(e.target.value)}>
                <FormControlLabel value="User" control={<Radio />} label="User" />
                <FormControlLabel value="Expert" control={<Radio />} label="Medical expert" />
            </RadioGroup>
        </FormControl>
        <VerticalSpace size={20} />
        <TextField 
            id="outlined-basic" 
            label="Fullname" 
            variant="outlined"
            style={{ background: 'white' }}
            fullWidth 
            required 
            error={fullnameError}
            helperText={fullnameError?"Required!":""}
            value={fullname}
            onChange={val => setFullname(val.target.value)} />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            type="email"
            style={{ background: 'white' }}
            fullWidth 
            required 
            error={emailError}
            helperText={emailError?"Required!":""}
            value={email}
            onChange={val => setEmail(val.target.value)} />
            <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
            }}
            style={{ background: 'white' }}
            fullWidth 
            required 
            error={passwordError}
            helperText={passwordError?"Required!":""}
            value={password}
            onChange={val => setPassword(val.target.value)} />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Confirm password" 
            variant="outlined"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
            }}
            style={{ background: 'white' }}
            fullWidth 
            required 
            error={confirmPasswordError}
            helperText={confirmPasswordError?"Required!":""}
            value={confirmPassword}
            onChange={val => setConfirmPassword(val.target.value)} />
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth onClick={() => handleSignupSubmit()}>Sign up</Button>
        <VerticalSpace size={20} />
        <div className="FormSignup_signup_container">
            <span>Already have an account? </span>
            <span className="FormSignin_signin_option" onClick={() => props.setForm(0)}>Sign in</span>
        </div>
    </div>
}

export default FormSignup;