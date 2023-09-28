
import { queryProducts } from "@/app/api/queryData/route";
import PWrap from "./wrapper_product";

import { ObjectId } from "mongodb";

export async function generateStaticParams() {
  const pdata = await queryProducts(
    {},
    { title: 0, brand: 0, price: 0, description: 0, pimage: 0 }
  );
  return pdata.map((res) => {
    return { id: res["_id"] };
  });
}
export default async function renderData({ params }) {
  

  const data = await queryProducts({"_id":new ObjectId(params._id)},{"_id":0});
  return (
    <>
     <PWrap data={data} id={params._id}></PWrap>
    </>
  );
}
