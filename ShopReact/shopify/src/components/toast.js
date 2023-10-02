"use client";

import { ToastContext } from "./globalContext";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ToastApp({ children }) {
  const [data, setData] = useState({
    showFlag: true,
    bodyData: "Welcome to Shopify!!!",
    timeOut: 1000,
  });
  return (
    <ToastContext.Provider value={[data, setData]}>
      <ToastContainer
        className="p-3 position-fixed"
        position="top-end"
        style={{ zIndex: 5 }}
      >
        <Toast
          onClose={() => {
            setData({ showFlag: false });
          }}
          show={data.showFlag}
          delay={data.timeOut}
          autohide
          className="shadow-lg"
        >
          <Toast.Header>
            <img
              src="/favicon.ico"
              className="rounded-circle me-2"
              alt=""
              width={15}
              height={15}
            />
            <strong className="me-auto">Shopify</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>{data.bodyData}</Toast.Body>
        </Toast>
      </ToastContainer>
      <Container className="m-auto p-lg-2">{children}</Container>
    </ToastContext.Provider>
  );
}
