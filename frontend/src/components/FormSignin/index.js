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

const FormSignin = props => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSigninSubmit = async () => {
        setEmailError(false);
        setPasswordError(false);
        if (email === "") {
            setEmailError(true);
        }
        if (password === "") {
            setPasswordError(true);
        }
        if (email && password) {
            const userData = {email, password}
            const response = await authenticationApis.signinUser(userData);
            if (!response.success) {
                alert(response.message);
            } else {
                window.localStorage.setItem('user', JSON.stringify(response));
                props.setLayout(1);
            }
        }
    }

    return <div className="FormSignin_container">
        <h1>Welcome!</h1>
        <p>Please enter your details.</p>
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
        <VerticalSpace size={10} />
        <div className="FormSignin_forgotpassword_container">
            <span>Forgot password</span>
        </div>
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth onClick={() => handleSigninSubmit()}>Sign in</Button>
        <VerticalSpace size={20} />
        <div className="FormSignin_signup_container">
            <span>Don't have an account? </span>
            <span className="FormSignin_signup_option" onClick={() => props.setForm(1)}>Sign up</span>
        </div>
    </div>
}

export default FormSignin;