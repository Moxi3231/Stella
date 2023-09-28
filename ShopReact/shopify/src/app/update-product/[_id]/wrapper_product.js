"use client";
import Product, { Use_State_Server } from "@/components/Product";
import ProductCardItemAddUpdate from "@/components/productCardUpdateInsert";
export default function PWrap(props) {
  const product = new Product();
  const id = props.id; 
  const data = props.data.at(0);
  product.setPData(data.title,data.brand,data.price,data.description,data.pimage);

  const btn_var = new Use_State_Server(false);
  const var_func = [product, btn_var.var, btn_var.setVal];
  const update_product = async () => {
    const resp = await fetch('');
  };
  return (
    <ProductCardItemAddUpdate
      vars={{
        func_call_on_submit: "",
        ButtonName: "UPDATE",
        var_func: var_func,
      }}
    ></ProductCardItemAddUpdate>
  );
}
