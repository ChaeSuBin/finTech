import React from "react";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
import { HeaderCpnt } from "../pages/HeaderCpnt";
var QRCode = require('qrcode.react');
const QRBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

export const QRcodePage = () => {
    const { search } = useLocation();
    const { finuseno } = queryString.parse(search);
    //param으로 넘기는법 알아보기(querystring 대신)

    return (
        <>
        <HeaderCpnt title="create QRcode"></HeaderCpnt>
        <QRBlock>
        <QRCode value={finuseno} />
        </QRBlock>
        </>
    )
}