import clientPromise from "../mongo-con";
import { ObjectId } from "mongodb";
import { NextResponse } from 'next/server'

export async function POST(request) {
    const data = await request.json();
    let cp,db,collection;
    try{
        cp = await clientPromise;
        db = cp.db("Products");
        collection = db.collection("items");
        collection.deleteOne({_id:new ObjectId(data["_id"])});
    } catch(error){
      console.error(error);
      return NextResponse.json({"deleteDone":false,err:error},{status:200})
    }
    return NextResponse.json({"deleteDone":true},{status:200})
}