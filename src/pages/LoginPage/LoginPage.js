import React from "react";
import LoginForm from "./LoginForm";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from '../../images/futureEatsInvert.png'
import  Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../../routes/Coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
    // useUnprotectedPage()
    const history = useHistory()

    return <ScreenContainer>
        <LogoImage src={logo}/>
        <LoginForm />
        <SignUpButtonContainer>
            <Button 
                onClick={()=>goToSignUpPage(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
            >
                Não possui uma conta? Cadastre-se

            </Button>
        </SignUpButtonContainer>
    </ScreenContainer>
}

export default LoginPage