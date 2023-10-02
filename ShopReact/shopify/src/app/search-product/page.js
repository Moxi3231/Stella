"use client";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import ItemCard from "@/components/productCard";
import { useState } from "react";
export default function searchProduct() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const updateTitleFetchData = (event) => {
    setTitle(event.target.value);
    setTitle(event.target.value);
    fetchData();
  };
  const fetchData = async () => {
    setData(null);
    if (title == "") {
      setData(null);
      return;
    }

    const resp = await fetch("/api/queryData", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        query: {
          $text: { $search: '"' + title + '"', $caseSensitive: false },
        },
        filter: {},
      }),
    });
    if (resp.ok) {
      const res_data = await resp.json();
      if (res_data.fetched) {
        setData([...res_data.items]);
      } else {
        setData(null);
      }
    }
  };
  return (
    <Container className="w-100 p-3">
      <InputGroup className="mb-3 position-sticky shadow-sm w-75 m-auto">
        <Form.Control
          placeholder="Enter Title"
          className="w-75"
          value={title}
          onChange={(event) => {
            updateTitleFetchData(event);
          }}
        />
        <Button
          className="btn-dark btn-outline-lighte w-25"
          onClick={fetchData}
        >
          Search
        </Button>
      </InputGroup>
      <Container className="w-100">
        {data == null && (
          <h1 className="text-center display-4 font-weight-bold text-info bg-light py-4 rounded shadow-sm">
            Filters Unapplied. Ready to Customize?
          </h1>
        )}
        {data != null && (
          <Row xs={1} md={2} className="g-4">
            {data.map((val) => (
              <ItemCard key={val._id} data={val}></ItemCard>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}
