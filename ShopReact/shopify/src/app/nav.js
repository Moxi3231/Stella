"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top" style={{zIndex:2}}>
        <Container>
          <Nav.Item>
            <Image
              src="/favicon.ico"
              width={25}
              height={25}
              roundedCircle
            ></Image>
          </Nav.Item>
          &nbsp;
          <Navbar.Brand href="/">Shopify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/view-products">View Product</Nav.Link>
            <Nav.Link href="/search">Search Product</Nav.Link>
            <Nav.Link href="/add-product">Add Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
