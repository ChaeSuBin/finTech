import React, { useState } from "react";
import { HeaderCpnt } from "../pages/HeaderCpnt";
import QRcodeReader from 'react-web-qr-reader';
import Modal from "react-modal";
import ModalWithdraw from "./withdraw/ModalWithdraw";

const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };

export const QrReader = () => {
    const [openModal, setopenModal] = useState(false);
    const [tofintechno, settofintechno] = useState("");
    //no camera: true else false
    const delay = 500;

  const previewStyle = {
    height: 340,
    width: 415,
  };

  const handleScan = (result) => {
    if (result) {
      console.log("handle", result);
      settofintechno(result.data);
      setopenModal(true);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const closeModal = () => {
    setopenModal(false);
  };

  return (
    <div>
    <HeaderCpnt title="QRcode Reader"></HeaderCpnt>
      <QRcodeReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <ModalWithdraw tofintechno={tofintechno}></ModalWithdraw>
      </Modal>
    </div>
  );
};