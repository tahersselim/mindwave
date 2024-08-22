import { NextResponse } from "next/server";
import Connect from "@/utils/db";
import Post from "@/models/Post";

// Handle GET requests to fetch a post by ID
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await Connect();

    // Validate ID parameter
    if (!id || typeof id !== "string") {
      return new NextResponse("Invalid ID parameter", { status: 400 });
    }

    const post = await Post.findById(id);

    // Check if the post exists
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
    
  } catch (error) {
    console.error("GET Request Error:", error);
    return new NextResponse("Failed to fetch post", { status: 500 });
  }
};

// Handle DELETE requests to delete a post by ID
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await Connect();

    // Validate ID parameter
    if (!id || typeof id !== "string") {
      return new NextResponse("Invalid ID parameter", { status: 400 });
    }

    const result = await Post.findByIdAndDelete(id);

    // Check if the post was deleted
    if (!result) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Post has been deleted", { status: 200 });

  } catch (error) {
    console.error("DELETE Request Error:", error);
    return new NextResponse("Failed to delete post", { status: 500 });
  }
};

// Handle unsupported HTTP methods
export const handler = (req) => {
  return new NextResponse("Method Not Allowed", { status: 405 });
};

// Use the handler for unsupported methods
export default function routeHandler(request, context) {
  switch (request.method) {
    case "GET":
      return GET(request, context);
    case "DELETE":
      return DELETE(request, context);
    default:
      return handler(request);
  }
}
