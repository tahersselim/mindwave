import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await Connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Connected to MongoDB failed", { status: 500 });
  }
};





export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await Connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse("post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Connected to MongoDB failed", { status: 500 });
  }
};
