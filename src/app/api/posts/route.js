import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post"

export const GET = async (request) => {
    try {
        await Connect()
        const Posts = await Post.find()
        return new NextResponse(JSON.stringify(Posts), { status: 200 });
        
      } catch (error) {
        return new NextResponse("Connected to MongoDB failed", { status: 500 });
      }
  
};
