import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { Span } from "next/dist/trace";

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgcontainer}>
        <Image
          src="/img.png"
          alt="writing"
          fill={true}
          className={Styles.img}
        />
      </div>
      <div className={Styles.textcontainer}>
        <div className={Styles.item}>
          <h1 className={Styles.title}>Our Vision</h1>
          <p className={Styles.desc}>
            At MindWave, we believe that the power of ideas can transform lives.
            Our vision is to create a space where thoughts flow freely and
            creativity is celebrated. We aim to build a community of thinkers,
            writers, and dreamers who are passionate about sharing their
            insights with the world. Whether you&apos;re here to learn, to be
            inspired, or to contribute, MindWave is your platform for exploring
            the endless possibilities that the written word offers.
          </p>
        </div>
        <div className={Styles.item}>
          <h1 className={Styles.title}>Our Story</h1>
          <p className={Styles.desc}>
            MindWave was born out of a love for storytelling and a deep
            appreciation for the written word. What started as a small project
            has grown into a thriving platform for bloggers and readers alike.
            We are dedicated to providing a space where everyone can express
            themselves, share their knowledge, and connect with like-minded
            individuals. Our journey is just beginning, and we are excited to
            have you join us as we continue to grow and evolve.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
