import React, { useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import { HeaderCpnt } from "../pages/HeaderCpnt";
import axios from "axios";
import AuthButton from "./AuthButton";
import qs from "qs"; //application/x-www-form-urlencoded (change this type)

export const AuthResultPage = () => {
    const { search } = useLocation();
    console.log("search:",search);
    const { code } = queryString.parse(search);
    const [accessToken, setaccessToken] = useState("토큰 받아오기 전 데이터");

    useEffect(() => {
      getAccessToken();
    }, []);

    const getAccessToken = () => {
      const sendData = qs.stringify({
        code: code,
        client_id: "0f4f7564-9aaf-43ac-b73a-6d77a0c28680",
        client_secret: "",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      });
      const option = {
        method: "POST",
        url: "/oauth/2.0/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: sendData,
      };
      //hint: proxy, json serialization on axios
          axios(option).then((response) => {
            console.log(response.data);
            setaccessToken(response.data.access_token);
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem("userSeqNum", response.data.user_seq_no);
            window.opener.location.href = "/listPage";
            window.close();
          });
    }

    return <div>
        <HeaderCpnt title={"code confirm"}></HeaderCpnt>
        <p>your code: </p>
        <p>{code}</p>
        <AuthButton handleClick={getAccessToken} title = {"getToken"}></AuthButton>
    </div>
}