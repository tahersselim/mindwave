import mongoose from "mongoose";

const Connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("MongoDB connection string is not defined in environment variables.");
    }
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
    throw new Error("Connection failed");
  }
};

export default Connect;
