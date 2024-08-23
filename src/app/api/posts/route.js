import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

// Handle GET requests
export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await Connect();

    // Validate username parameter if it is provided
    if (username && typeof username !== "string") {
      return new NextResponse("Invalid username parameter", { status: 400 });
    }

    const posts = await Post.find(username ? { username } : {});
    return new NextResponse(JSON.stringify(posts), { status: 200 });

  } catch (error) {
    console.error("GET Request Error:", error);
    return new NextResponse("Failed to fetch posts", { status: 500 });
  }
};

// Handle POST requests
export const POST = async (request) => {
  try {
    const body = await request.json();

    // Validate request body
    if (!body || typeof body !== "object" || !body.title || !body.content) {
      return new NextResponse("Invalid request body", { status: 400 });
    }

    const newPost = new Post(body);

    await Connect();
    await newPost.save();
    return new NextResponse("Post has been successfully published", { status: 201 });

  } catch (error) {
    console.error("POST Request Error:", error);
    return new NextResponse("Failed to publish post", { status: 500 });
  }
};

// Handle unsupported HTTP methods
export const handler = (req) => {
  return new NextResponse("Method Not Allowed", { status: 405 });
};

