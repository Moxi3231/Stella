import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import DeleteProductModal from "@/components/deleteProduct";

export default function ItemCard(props) {
  const data = props.data;
  const [buttonFlag, setButtonFlag] = useState(false);
  const [deleteDone, setDeleteDone] = useState(false);


  return (
    <Col key={data._id} className={deleteDone ? "d-none": ""}>
      <DeleteProductModal
        button_data={{ buttonFlag, setButtonFlag }}
        pid={data._id}
        pname={data.title}
        setDeleteDone = {setDeleteDone}
      ></DeleteProductModal>
      <Card className="m-1 shadow shadow-sm border-0">
        <Dropdown>
          <Dropdown.Toggle
            className="position-absolute bg-light top-100 end-0"
            variant="outline-light"
            id="dropdown-basic"
          >
            <span className="text-lg-center text-body-emphasis">&#8942;</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Nav.Item className="btn d-block btn-outline-warning btn-sm m-1">
              <Nav.Link href={"/update-product/".concat(data._id)}>
                Update
              </Nav.Link>
            </Nav.Item>

            <Dropdown.Divider />

            <div className="d-grid gap-2 m-1">
              <Button
                className="btn d-block btn-sm btn-outline-danger"
                size="lg"
                variant="outline-danger"
                onClick={() => {
                  setButtonFlag(true);
                }}
              >
                Delete
              </Button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <div style={{ height: 250, margin: "auto", display: "block" }}>
          <Image
            src={data.pimage}
            width={300}
            height="auto"
            style={{ margin: "center" }}
          ></Image>
        </div>

        <Card.Body
          className="bg-light"
          style={{ height: 150, overflowY: "scroll" }}
        >
          <Card.Title>
            <span>{data.title}</span>
            <Badge className="position-absolute end-0 m-1" pill bg="success">
              ${data.price}
            </Badge>
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
