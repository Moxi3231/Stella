"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import { ToastContext } from "../toast-context";

export default function AddProduct() {
  const [product_title, setProductTitle] = useState("");
  const [product_brand, setProductBrand] = useState("");
  const [product_price, setProductPrice] = useState(0);
  const [product_desciprition, setProductDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [submitFg, setSubmitFg] = useState(false);

  const { data, setData } = useContext(ToastContext);

  const add_to_db = async (event) => {
    event.preventDefault();
    setSubmitFg(true);

    const resp = await fetch("/api/insertData", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        title: product_title,
        brand: product_brand,
        price: Number.parseInt(product_price),
        description: product_desciprition,
        pimage:image_url
      }),
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data.insertDone) {
        setProductBrand("");
        setProductDescription("");
        setProductTitle("");
        setProductPrice(0);
        setImageUrl("");

        setData({ showFlag: true, bodyData: "Insertion Done", timeOut: 3000 });
        setSubmitFg(false);
      } else {
        console.log(data);
      }
    } else {
      console.log(resp);
    }
  };
  return (
    <>
      <Form onSubmit={add_to_db}>
        <Form.Group className="mb-3" controlId="formBasicProductName">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="string"
            required
            value={product_title}
            placeholder="Enter Product Title"
            onChange={(event) => {
              setProductTitle(event.target.value);
            }}
          />
        </Form.Group>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicProductBrand">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control
              type="string"
              required
              value={product_brand}
              placeholder="Enter Product Brand"
              onChange={(event) => {
                setProductBrand(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col" controlId="formBasicProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              required
              value={product_price}
              placeholder="Enter Product Price"
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-5" controlId="formBasicProductDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={10}
            value={product_desciprition}
            placeholder="Enter Product Description"
            onChange={(event) => {
              setProductDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicImageURL">
          <Form.Label>Product Image URL</Form.Label>
          <Form.Control
            required
            value={image_url}
            placeholder="Enter Image URL"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" disabled={submitFg} type="submit" size="lg">
            Add
          </Button>
        </div>
      </Form>
    </>
  );
}
