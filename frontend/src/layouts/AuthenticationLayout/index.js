import { useState } from "react";
import "./style.css";
import logoTransparent from "../../assets/images/logo_transparent.png";
import FormSignin from "../../components/FormSignin";
import FormSignup from "../../components/FormSignup";

const AuthenticationLayout = props => {
    const [form, setForm] = useState(0);

    return <div className="Authenticationlayout_container">
        <div className="Authenticationlayout_logo_container">
            <img className="Authenticationlayout_logo" alt="logo" src={logoTransparent} />
        </div>
        <div className="Authenticationlayout_form_container">
            <div className="Authenticationlayout_form">
                {
                    (form === 0)?
                    <FormSignin setLayout={props.setLayout} setForm={setForm}/>:
                    <FormSignup setForm={setForm} />
                }
            </div>
        </div>
    </div>
}

export default AuthenticationLayout;