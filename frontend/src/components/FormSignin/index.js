import { useState } from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VerticalSpace from "../../components/VerticalSpace";
import authenticationApis from "../../apis/authentication";

const FormSignin = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSigninSubmit = async () => {
        const userData = {email, password}
        const response = await authenticationApis.signinUser(userData);
        window.localStorage.setItem('user', JSON.stringify(response));
        props.setLayout(1);
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
        <VerticalSpace size={10} />
        <div className="FormSignin_forgotpassword_container">
            <span>Forgot password</span>
        </div>
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth onClick={() => handleSigninSubmit()}>Sign in</Button>
        <VerticalSpace size={20} />
        <div className="FormSignin_signup_container">
            <span>Don't have an account? </span>
            <span>Sign up</span>
        </div>
    </div>
}

export default FormSignin;