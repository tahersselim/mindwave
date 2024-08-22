import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const Connect = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    if (!process.env.MONGO) {
      throw new Error("MongoDB connection string is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Set to true after successful connection
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
    throw new Error("Connection failed");
  }
};

export default Connect;
