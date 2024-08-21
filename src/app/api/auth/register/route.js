import User from "@/models/User";
import Connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await Connect();
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save()
    return new NextResponse("user has been created", {
        status: 201,
      });
  } catch (error) {
    
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
