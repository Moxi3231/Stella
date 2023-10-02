"use client";

import ItemCard from "@/components/productCard";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import Spinner from "react-bootstrap/Spinner";
export default function ViewAll() {
  const [fetchedData, setFetchedData] = useState(false);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("/api/queryData", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        query: {},
        filter: {},
      }),
    });
    if (resp.ok) {
      const res_data = await resp.json();
      if (res_data.fetched) {
        setItems([...res_data.items]);
        setTimeout(() => {
          setFetchedData(true);
        },500);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchedData) {
    return (
      <Container>
        <Row xs={1} md={2} className="g-4">
          {items.map((val) => (
            <ItemCard key={val._id} data={val}></ItemCard>
          ))}
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      {" "}
      <Spinner
        animation="grow"
        className="d-block d-lg-block bg-primary-subtle center"
        style={{ width: 300, height: 300,marginLeft:"auto",marginRight:"auto" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}
