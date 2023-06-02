import "./style.css";
import logoTransparent from "../../assets/images/logo_transparent.png";
import FormSignin from "../../components/FormSignin";
// import FormSignup from "../../components/FormSignup";

const AuthenticationLayout = () => {
    return <div className="Authenticationlayout_container">
        <div className="Authenticationlayout_logo_container">
            <img className="Authenticationlayout_logo" alt="logo" src={logoTransparent} />
        </div>
        <div className="Authenticationlayout_form_container">
            <div className="Authenticationlayout_form">
                <FormSignin />
                {/* <FormSignup /> */}
            </div>
        </div>
    </div>
}

export default AuthenticationLayout;