import clientPromise from "../mongo-con";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export async function POST(request) {
  const data = await request.json();
  let cp, db, collection, id;
  try {
    cp = await clientPromise;
    db = cp.db("Products");
    collection = db.collection("items");
    data["_id"] = new ObjectId(data["_id"]);
    id = data["_id"];
    collection.replaceOne({ _id: id }, data);
  } catch (exception) {
    console.log(exception);
    return NextResponse.json({ updateDone: false }, { status: 200 });
  }

  return NextResponse.json({ updateDone: true }, { status: 200 });
}
