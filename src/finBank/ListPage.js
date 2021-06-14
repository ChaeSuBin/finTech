import React, { useState, useEffect} from "react";
import { HeaderCpnt } from "../pages/HeaderCpnt";
import axios from "axios";
import Card from "./Card";

export const ListPage = () => {
    const [acountList, setAccountList] = useState([]);
    useEffect(() => {
        openMePage();
      }, []);
  //axios 통해서 https://testapi.openbanking.or.kr/v2.0/user/me 의 계좌 목록을 받아오기
  //버튼을 눌렀을때 요청 발생
  const openMePage = () => {
      const option = {
        method: "GET",
        url: "/v2.0/user/me",
        headers: {
          Authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
            user_seq_no: localStorage.getItem("userSeqNum"),
        },
      };
      //hint: proxy, json serialization on axios
          axios(option).then((response) => {
            console.log(response.data);
            setAccountList(response.data.res_list);
          });
  };

  return (
    <>
      <HeaderCpnt title="check Account"/>
      {acountList.map((account) => {
        return (
        <Card 
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
        ></Card>
        );
      })}
    </>
  );
};