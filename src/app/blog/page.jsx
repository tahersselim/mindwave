import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={Styles.maincontainer}>
      <Link href="/blog/test" className={Styles.container}>
        <div className={Styles.imgcontainer}>
          <Image
            src="/ship.jpg"
            alt=""
            width={400}
            height={250}
            className={Styles.img}
          />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.title}>test</h1>
          <p className={Styles.desc}>des</p>
        </div>
      </Link>
      <Link href="/blog/test" className={Styles.container}>
        <div className={Styles.imgcontainer}>
          <Image
            src="/ship.jpg"
            alt=""
            width={400}
            height={250}
            className={Styles.img}
          />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.title}>test</h1>
          <p className={Styles.desc}>des</p>
        </div>
      </Link>
      <Link href="/blog/test" className={Styles.container}>
        <div className={Styles.imgcontainer}>
          <Image
            src="/ship.jpg"
            alt=""
            width={400}
            height={250}
            className={Styles.img}
          />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.title}>test</h1>
          <p className={Styles.desc}>des</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
