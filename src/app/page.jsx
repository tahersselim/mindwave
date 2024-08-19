import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Ride the Wave of Ideas and Insights</h1>
        <p className={styles.description}>
          Discover a world where thoughts flow freely and creativity knows no
          bounds. MindWave is your destination for compelling blogs, where every
          word is crafted to inspire, inform, and ignite your passion. Dive into
          a sea of ideas and let your mind explore new horizons.
        </p>
        <Button url="blog" text="Explore the Blogs"/>
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          height={250}
          width={200}
          className={styles.img}
        />
      </div>
    </div>
  );
}
