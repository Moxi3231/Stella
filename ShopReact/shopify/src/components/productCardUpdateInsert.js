import { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ProductItemAddUpdate = createContext({});

export default function ProductCardItemAddUpdate(props) {
  const vars = props.vars;
  const [product, submitFg, setSubmitFg] = vars.var_func;

  return (
    <ProductItemAddUpdate.Provider
      value={{
        product_title: product.product_title,
        product_brand: product.product_brand,
        product_price: product.product_price,
        product_desciprition: product.product_desciprition,
        image_url: product.image_url,
        setPData: product.setPData,
        setSubmitFg: setSubmitFg,
      }}
    >
      <Form onSubmit={vars.func_call_on_submit}>
        <Form.Group className="mb-3" controlId="formBasicProductName">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="string"
            required
            value={product.product_title}
            placeholder="Enter Product Title"
            onChange={(event) => {
                product.setProductTitle(event.target.value);
            }}
          />
        </Form.Group>

        <div className="row">
          <Form.Group className="mb-3 col" controlId="formBasicProductBrand">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control
              type="string"
              required
              value={product.product_brand}
              placeholder="Enter Product Brand"
              onChange={(event) => {
                product.setProductBrand(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col" controlId="formBasicProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              required
              value={product.product_price}
              placeholder="Enter Product Price"
              onChange={(event) => {
                product.setProductPrice(event.target.value);
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
            value={product.product_desciprition}
            placeholder="Enter Product Description"
            onChange={(event) => {
                product.setProductDescription(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicImageURL">
          <Form.Label>Product Image URL</Form.Label>
          <Form.Control
            required
            value={product.image_url}
            placeholder="Enter Image URL"
            onChange={(event) => {
                product.setImageUrl(event.target.value);
            }}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" disabled={submitFg} type="submit" size="lg">
            {vars.ButtonName}
          </Button>
        </div>
      </Form>
    </ProductItemAddUpdate.Provider>
  );
}
