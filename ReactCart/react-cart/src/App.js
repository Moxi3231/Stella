import "./App.css";
import React, { useState, useEffect } from "react";
import getProductData from "product-fetch";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Badge from 'react-bootstrap/Badge'

function ImageCarousel(props) {
  const img_links = props.links;
  const width = props.width;
  const height = props.height;
  return (
    <Carousel
      fade
      data-bs-theme="dark"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: { width },
        height: { height },
      }}
    >
      {img_links.map((url) => (
        <Carousel.Item interval={1000 * 100}>
          <Image className="d-block w-100" src={url} height={height}></Image>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
function Product(props) {
  const product = props.details;
  return (
    <Col>
      <Card>
        <ImageCarousel
          links={product.images}
          width="500"
          height="300"
        ></ImageCarousel>
        <Card.Body className="bg-light">
          <Card.Title >
            {product.title}
            <Badge className="position-absolute end-0" pill bg="secondary">${product.price}</Badge>
          </Card.Title>
          <Card.Text>
            {
              // id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}
            }
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
function App() {
  const [data, setData] = useState(null);
  const [loadDone, setLoadDone] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      getProductData()
        .then((result) => result["products"])
        .then((data) => setData(data))
        .finally(() => {
          setLoadDone(true);
        });
    };
    fetchProducts();
  }, []);
  if (loadDone)
    return (
      <Container>
        <Row xs={1} md={2} className="g-4">
          {data.map((val) => (
            <Product key={val.id} details={val}></Product>
          ))}
        </Row>
      </Container>
    );
  else
    return (
      <Container>
        <h1> Loading ... </h1>
      </Container>
    );
}

export default App;
