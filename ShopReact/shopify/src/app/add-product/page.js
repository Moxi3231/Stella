"use client";

import { useState, useContext } from "react";
import { ToastContext } from "../../components/globalContext";
import { ProductItemAddUpdate } from "@/components/productCardUpdateInsert";
import ProductCardItemAddUpdate from "@/components/productCardUpdateInsert";
import Product from "@/components/Product";


export default function AddProduct() {
  const { data, setData } = useContext(ToastContext);

  const product = new Product();
  const [submitFg, setSubmitFg] = useState(false);

  const var_func = [
    product,
    submitFg,
    setSubmitFg,
  ];
  const add_to_db = async (event) => {
    event.preventDefault();
    setSubmitFg(true);
    const resp = await fetch("/api/insertData", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        title: product.product_title,
        brand: product.product_brand,
        price: Number.parseInt(product.product_price),
        description: product.product_desciprition,
        pimage: product.image_url,
      }),
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data.insertDone) {
        product.setPData("", "", 0, "", "");
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
      <ProductCardItemAddUpdate
        vars={{ func_call_on_submit: add_to_db, ButtonName: "ADD", var_func:var_func }}
      ></ProductCardItemAddUpdate>
    </>
  );
}
