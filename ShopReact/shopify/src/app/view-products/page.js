"use client";

import ItemCard from "@/components/productCard";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

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
        setFetchedData(true);
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
    <Container className="bg-primary-subtle">
      {" "}
      <h1> Loading...</h1>
    </Container>
  );
}
