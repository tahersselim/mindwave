import User from "@/models/User";
import Connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    // Parse and validate request body
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Connect to the database
    await Connect();

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 5);

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User has been created", { status: 201 });

  } catch (error) {
    console.error("POST Request Error:", error);
    return new NextResponse("Failed to create user", { status: 500 });
  }
};
