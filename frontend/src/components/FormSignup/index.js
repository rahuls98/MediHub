import { useState } from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VerticalSpace from "../../components/VerticalSpace";
import authenticationApis from "../../apis/authentication";

const FormSignup = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignupSubmit = async () => {
        const userData = {fullname, email, password}
        const response = await authenticationApis.createNewUser(userData);
        console.log(response);
    }

    return <div className="FormSignup_container">
        <h1>Welcome!</h1>
        <p>Please enter your details.</p>
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Fullname" 
            variant="outlined"
            style={{ background: 'white' }}
            fullWidth 
            required 
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
            value={email}
            onChange={val => setEmail(val.target.value)} />
            <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type="password" 
            style={{ background: 'white' }}
            fullWidth 
            required 
            value={password}
            onChange={val => setPassword(val.target.value)} />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Confirm password" 
            variant="outlined"
            type="password" 
            style={{ background: 'white' }}
            fullWidth 
            required 
            value={confirmPassword}
            onChange={val => setConfirmPassword(val.target.value)} />
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth onClick={() => handleSignupSubmit()}>Sign up</Button>
        <VerticalSpace size={20} />
        <div className="FormSignup_signup_container">
            <span>Already have an account? </span>
            <span>Sign in</span>
        </div>
    </div>
}

export default FormSignup;