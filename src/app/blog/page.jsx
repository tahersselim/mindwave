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
          <h1 className={Styles.title}>lorem ipsum</h1>
          <p className={Styles.desc}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more or less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
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
          <h1 className={Styles.title}>lorem ipsum</h1>
          <p className={Styles.desc}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
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
          <h1 className={Styles.title}>lorem ipsum</h1>
          <p className={Styles.desc}>It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
