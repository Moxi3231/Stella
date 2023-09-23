import clientPromise from "../mongo-con";
import { NextResponse } from 'next/server'

export async function POST(request) {
    const data = await request.json();
    let cp,db,collection;
    try{
        cp = await clientPromise;
        db = cp.db("Products");
        collection = db.collection("items");
        collection.insertOne(data);
    } catch(error){
      console.error(error);
      return NextResponse.json({"insertDone":false,err:error},{status:200})
    }
    return NextResponse.json({"insertDone":true},{status:200})
}