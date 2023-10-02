import clientPromise from "../mongo-con";
import { NextResponse } from "next/server";
export async function queryProducts(query, filter) {
  let queryData;
  try {
    let cp, db;
    cp = await clientPromise;
    db = cp.db("Products");
    //await db.collection("items").createIndex({title:"text"});
    queryData = await db
      .collection("items")
      .find(query)
      .project(filter)
      .toArray();

  } catch (excpetion) {
    console.error(excpetion);
  }
  return queryData;
}
export async function POST(request) {
  let data;
  let queryData;
  try {
    data = await request.json();
    queryData = await queryProducts(data.query, data.filter);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ fetched: false, err: error }, { status: 200 });
  }
  return NextResponse.json(
    { fetched: true, items: queryData },
    { status: 200 }
  );
}
