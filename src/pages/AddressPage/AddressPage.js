import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ScreenContainer } from "../HomePage/styled";
import { LogoImage } from "../LoginPage/styled";
import AddressForm from "./AddressForm";
import logo from '../../images/futureEatsInvert.png'
const SignupAddressPage = () => {
    // useProtectedPage() 

    return <ScreenContainer>
        <Header title={"Endereço"}/>
        <LogoImage src={logo} />
        <AddressForm />
    </ScreenContainer>
}

export default SignupAddressPage;