import React from "react";
import { HeaderCpnt } from "../pages/HeaderCpnt";
import AuthButton from "./AuthButton";

export const MainPage = () => {

    const openUserAuthPage = () => {
        let tmpwindow = window.open("about:blank");
        let clientId = "0f4f7564-9aaf-43ac-b73a-6d77a0c28680";
        let authPageUrl = 
        `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
        tmpwindow.location.href = authPageUrl;
    }

    return(
        <>
        <HeaderCpnt title="user Authorize"></HeaderCpnt>
        <AuthButton title="Authorize" handleClick = {openUserAuthPage}/>
        </>
    );
}