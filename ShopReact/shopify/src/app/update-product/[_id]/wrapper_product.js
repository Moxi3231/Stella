"use client";
import Product from "@/components/Product";
import ProductCardItemAddUpdate from "@/components/productCardUpdateInsert";
import { useEffect, useContext, useState } from "react";
import { ToastContext } from "@/components/globalContext";
export default function PWrap(props) {
  const [ , setToastData ] = useContext(ToastContext);


  const product = new Product();
  const id = props.id;
  const data = props.data.at(0);

  useEffect(() => {
    product.setPData(
      id,
      data.title,
      data.brand,
      data.price,
      data.description,
      data.pimage
    );
  }, []);

  const [submitFg, setSubmitFg] = useState(true);

  const var_func = [
    product,
    submitFg,
    setSubmitFg,
  ];

  const update_product = async () => {
    event.preventDefault();
    const resp = await fetch("/api/updateData", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({
        _id: id,
        title: product.product_title,
        brand: product.product_brand,
        price: Number.parseInt(product.product_price),
        description: product.product_desciprition,
        pimage: product.image_url,
      }),
    });
    const jdata = await resp.json();
    if(jdata.updateDone)
      setToastData({ showFlag: true, bodyData: "Update Done", timeOut: 3000 });
    else
    setToastData({ showFlag: true, bodyData: "Couldnt Update, Check log for details", timeOut: 3000 });
  };

  return (
    <ProductCardItemAddUpdate
      vars={{
        func_call_on_submit: update_product,
        ButtonName: "UPDATE",
        var_func: var_func,
      }}
    ></ProductCardItemAddUpdate>
  );
}
