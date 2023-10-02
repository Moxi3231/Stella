"use client";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import { ToastContext } from "@/components/globalContext";
import { useContext } from "react";

export default function DeleteProductModal(props) {
  const [_, setToastData] = useContext(ToastContext);
  const { buttonFlag, setButtonFlag } = props.button_data;
  const pid = props.pid;
  const pname = props.pname;
  const setDeleteDone = props.setDeleteDone;

  const delProduct = async () => {
    setButtonFlag(false);
    const resp = await fetch("/api/deleteProduct", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        _id: pid,
      }),
    });
    const jdata = await resp.json();
    if (jdata.deleteDone) {
      setDeleteDone(true);
      setToastData({
        showFlag: true,
        bodyData: "Deleted Record",
        timeOut: 3000,
      });
    } else {
      setToastData({
        showFlag: true,
        bodyData: "Couldn't Delete Record",
        timeOut: 3000,
      });
    }
  };
  return (
    <>
      <Modal
        show={buttonFlag}
        onHide={() => {
          setButtonFlag(false);
        }}
        size="md"
        centered
      >
        <Modal.Header closeButton className="text-md-center">
          <Modal.Title className="text-center">
            Delete Product: <span>{pname}</span>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Button
              variant="outline-danger"
              size="lg"
              className="btn d-block"
              onClick={delProduct}
            >
              Yes
            </Button>
            <Button
              variant="outline-success"
              className="d-block"
              onClick={() => {
                setButtonFlag(false);
              }}
            >
              No
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}
