import React from "react";
import Header from "../../components/Header/Header";
import { ScreenContainer } from "../HomePage/styled";
import logo from '../../images/futureEatsInvert.png'
import { LogoImage } from "../LoginPage/styled";
import SignupForm from "./SignUpForm";

const SignUpPage = () => {
    return <ScreenContainer>
        <Header title={"Cadastro"}/>
        <LogoImage src={logo}/>
        <SignupForm />
    </ScreenContainer>
}

export default SignUpPage;