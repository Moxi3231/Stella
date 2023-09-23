import clientPromise from "../mongo-con";
import { NextResponse } from 'next/server'

export async function POST(request) {
    const data = await request.json();
    let cp,db;
    let queryData;
    try{
        cp = await clientPromise;
        db = cp.db("Products");
        queryData = await db.collection("items").find(data.query,data.filter).toArray();
    } catch(error){
      console.error(error);
      return NextResponse.json({"fetched":false,err:error},{status:200})
    }
    return NextResponse.json({"fetched":true,"items":queryData},{status:200})
}