import React from "react";
import { InitialPageContainer, Logo } from "./styled";
import futureEats from "../../images/futureEats.png";
import { CircularProgress } from '@material-ui/core';

const InitialPage = () => {

    
    const token = localStorage.getItem("token")

  setTimeout(function () {
    token ?
      window.location.href = '/home'
      :
      window.location.href = '/login'

  }, 2500);

    return <InitialPageContainer>
        <Logo src={futureEats}/>
        <CircularProgress color={'primary'}/>
    </InitialPageContainer>
}

export default InitialPage