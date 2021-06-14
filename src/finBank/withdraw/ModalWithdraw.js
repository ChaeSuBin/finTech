import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ModalCard from "./ModalCard";
import axios from "axios";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = ({tofintechno}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [accountList, setAccountList] = useState([]);
  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
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
    axios(option).then((response) => {
      console.log(response.data);
      setAccountList(response.data.res_list);
    });
  };

  return (
    <ModalWithdrawBlock>
    <Slider {...settings}>
      {accountList.map((account) => {
        return (
          <ModalCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
            tofintechno={tofintechno}
          ></ModalCard>
        );
      })}
    </Slider>
  </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;