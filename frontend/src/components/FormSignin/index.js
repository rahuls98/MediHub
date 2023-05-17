import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VerticalSpace from "../../components/VerticalSpace";

const FormSignin = () => {
    return <div className="FormSignin_container">
        <h1>Welcome!</h1>
        <p>Please enter your details.</p>
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            type="email"
            fullWidth 
            required />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type="password" 
            fullWidth 
            required />
        <VerticalSpace size={10} />
        <div className="FormSignin_forgotpassword_container">
            <span>Forgot password</span>
        </div>
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth>Sign in</Button>
        <VerticalSpace size={20} />
        <div className="FormSignin_signup_container">
            <span>Don't have an account? </span>
            <span>Sign up</span>
        </div>
    </div>
}

export default FormSignin;