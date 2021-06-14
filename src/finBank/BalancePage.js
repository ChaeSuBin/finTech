import React, { useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { HeaderCpnt } from "../pages/HeaderCpnt";

const BalancePage = () => {
    const [balance, setBalance] = useState("0");
    const { search } = useLocation();
    console.log(search);
    const { finuseno } = queryString.parse(search);

    useEffect(() => {
        getBalance();
      }, []);

  const getTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202112336U" + countnum;
    return transId;
  };

  const getBalance = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
          bank_tran_id: getTransId(),
          fintech_use_num: finuseno,
          tran_dtime: "20210528144239",
        },
    };
        axios(option).then(({ data }) => {
        console.log(data.balance_amt);
        setBalance(data.balance_amt);
      });
    };

  return (
    <>
      <HeaderCpnt title={"check balance"}></HeaderCpnt>
      <p>Deposit: {balance}</p>
    </>
  );
};

export default BalancePage;