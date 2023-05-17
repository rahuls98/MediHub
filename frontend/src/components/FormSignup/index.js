import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VerticalSpace from "../../components/VerticalSpace";

const FormSignup = () => {
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
            required />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            type="email"
            style={{ background: 'white' }}
            fullWidth 
            required />
            <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type="password" 
            style={{ background: 'white' }}
            fullWidth 
            required />
        <VerticalSpace size={30} />
        <TextField 
            id="outlined-basic" 
            label="Confirm password" 
            variant="outlined"
            type="password" 
            style={{ background: 'white' }}
            fullWidth 
            required />
        <VerticalSpace size={30} />
        <Button variant="contained" fullWidth>Sign up</Button>
        <VerticalSpace size={20} />
        <div className="FormSignup_signup_container">
            <span>Already have an account? </span>
            <span>Sign in</span>
        </div>
    </div>
}

export default FormSignup;