import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
    },
    { timestamps: true }
  );

let Post;

if (mongoose.models.Post) {
  Post = mongoose.model("Post");
} else {
  Post = mongoose.model("Post", PostSchema);
}

export default Post;
