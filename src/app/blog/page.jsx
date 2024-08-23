import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}


export const metadata = {
  title:
    "MindWave Blog",
  description:
    "MindWave Blog offers in-depth articles and thought-provoking discussions on technology, creativity, and innovation. Explore a wide range of topics and stay ahead with the latest trends.",
};
const Blog = async () => {
  const data = await getData();
  return (
    <div className={Styles.maincontainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={Styles.container} key={item._id}>
          <div className={Styles.imgcontainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={Styles.img}
            />
          </div>
          <div className={Styles.content}>
            <h1 className={Styles.title}>{item.title}</h1>
            <p className={Styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
