import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.info}>
          <h1 className={Styles.title}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </h1>
          <p className={Styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>

          <div className={Styles.author}>
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={40}
              height={40}
              className={Styles.avatar}
            />
            <span className={Styles.username}>username</span>
          </div>
        </div>
        <div className={Styles.imgcontainer}>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            fill={true}
            className={Styles.img}
          />
        </div>
      </div>
      <div className={Styles.content}>
        <p className={Styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose , when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
