"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import Styles from "./page.module.css";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts/?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={Styles.container}>
        <div className={Styles.posts}>
          {!isLoading &&
            data.map((post) => (
              <div className={Styles.post} key={post._id}>
                <div className={Styles.imgcontainer}>
                  <a href={`/blog/${post._id}`}>
                    <Image
                      src={post.img}
                      alt="post img"
                      height={100}
                      width={200}
                    />
                  </a>
                </div>
                <h2 className={Styles.postTitle}>{post.title}</h2>
                <Image
                  onClick={() => handleDelete(post._id)}
                  src="/delete.png"
                  className={Styles.delete}
                  width={25}
                  height={25}
                  alt="delete"
                />
              </div>
            ))}
        </div>
        <form className={Styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>

          <input type="text" placeholder="Title" className={Styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={Styles.input}
          />
          <input type="text" placeholder="Image" className={Styles.input} />
          <textarea
            placeholder="Content"
            className={Styles.textarea}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className={Styles.button}>Post</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
