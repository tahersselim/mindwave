import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  console.log({ username });

  try {
    await Connect();
    const Posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(Posts), { status: 200 });
  } catch (error) {
    console.error("GET Request Error:", error);
    return new NextResponse("Failed to fetch posts", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    const newPost = new Post(body);

    await Connect();
    await newPost.save();
    return new NextResponse("Post has been successfully published", {
      status: 201,
    });
  } catch (error) {
    console.error("POST Request Error:", error);
    return new NextResponse("Failed to publish post", { status: 500 });
  }
};
