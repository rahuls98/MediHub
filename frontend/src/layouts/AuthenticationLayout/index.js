import "./style.css";
import logo from "../../assets/images/logo.png";
import FormSignin from "../../components/FormSignin";

const AuthenticationLayout = () => {
    return <div className="Authenticationlayout_container">
        <div className="Authenticationlayout_logo_container">
            <img className="Authenticationlayout_logo" alt="logo" src={logo} />
        </div>
        <div className="Authenticationlayout_form_container">
            <div className="Authenticationlayout_form">
                <FormSignin />
            </div>
        </div>
    </div>
}

export default AuthenticationLayout;