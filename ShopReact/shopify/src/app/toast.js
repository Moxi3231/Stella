"use client";

import { ToastContext } from "./toast-context";
import {useContext,useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';



export default function ToastApp({ children }) {
    const [data, setData] = useState({
        showFlag: true,
        bodyData: "Welcome to Shopify!!!",
        timeOut: 500
      });
  return (
<ToastContext.Provider value={{data,setData}}>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 3 }}>
        <Toast onClose={() => {setData({showFlag:false})}} show={data.showFlag} delay={data.timeOut} autohide>
          <Toast.Header>
            <img
              src="./favicon.ico"
              className="rounded-circle me-2"
              alt=""
              width={15}
              height={15}
            />
            <strong className="me-auto">Shopify</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>
            {data.bodyData}
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {children}
    </ToastContext.Provider>
  );
}
