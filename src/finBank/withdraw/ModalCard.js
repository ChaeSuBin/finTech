import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
    
    const [amount, setamount] = useState("");
    const handleAmountChange = (e) => {
        const { value } = e.target;
        setamount(value);
    };

    const getTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202112336U" + countnum;
        return transId;
    };

    const handleClickWithdraw = () => {
        var sendData = JSON.stringify({
            "bank_tran_id": getTransId(),
            "cntr_account_type": "N",
            "cntr_account_num": "1234567456739",
            "dps_print_content": "이용료",
            "fintech_use_num": fintechUseNo,
            "wd_print_content": "출금",
            "tran_amt": amount,
            "tran_dtime": "20210528113039",
            "req_client_name": "채수빈",
            "req_client_fintech_use_num": fintechUseNo,
            "req_client_num": "NAIRUM",
            "transfer_purpose": "ST",
            "recv_client_name": "채수빈",
            "recv_client_bank_code": "097",
            "recv_client_account_num": "1234567456739"
          });
        
          const option = {
            method: 'POST',
            url: '/v2.0/transfer/withdraw/fin_num',
            headers: { 
                Authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            data : sendData
          };
          axios(option).then((response) => {
              console.log(response.data);
              if (response.data.rsp_code === "A0000") {
                  deposit();
                }
            });
    };
    
    const deposit = () => {
        var data = JSON.stringify({
            "cntr_account_type": "N",
            "cntr_account_num": "1234567456739",
            "wd_pass_phrase": "NONE",
            "wd_print_content": "입금금액",
            "name_check_option": "off",
            "tran_dtime": "20210528152438",
            "req_cnt": "1",
            "req_list": [
              {
                "tran_no": "1",
                "bank_tran_id": getTransId(),
                "fintech_use_num": fintechUseNo,
                "print_content": "쇼핑몰환불",
                "tran_amt": amount,
                "req_client_name": "채수빈",
                "req_client_bank_code": "097",
                "req_client_account_num": "1234567456739",
                "req_client_num": "CHAE1234",
                "transfer_purpose": "ST",
                "recv_bank_tran_id": "M202112336U000000010",
                "cms_num": "93848103221"
              }
            ]
          });
          
          const option = {
            method: 'POST',
            url: '/v2.0/transfer/deposit/fin_num',
            headers: { 
              'Authorization': `bearer ${localStorage.getItem("accessToken")}`, 
              'Content-Type': 'application/json'
            },
            data : data
        };
        axios(option).then((response) => {
            console.log(response.data);
            if (response.data.rsp_code === "A0000") {
                alert("송금 완료 / 결제 완료");
              }
          });
    };

    return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}에 출금이체</p>
      <input onChange = {handleAmountChange}></input>
      <WithDrawButton onClick={handleClickWithdraw}>결재하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;