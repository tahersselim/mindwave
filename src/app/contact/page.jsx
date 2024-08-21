"use client";
import Image from "next/image";
import Styles from "./page.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("The email was sent successfully");
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send the email. Please try again later.");
          setIsLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Contact Me</h1>
      <p className={Styles.titlee}>
        Please fill out the form below to discuss any work opportunities.
      </p>
      <div className={Styles.content}>
        <div className={Styles.imgcontainer}>
          <Image
            src="/call-.png"
            fill={true}
            alt="customer service"
            className={Styles.img}
          />
        </div>
        <form className={Styles.contactform} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className={Styles.input}
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className={Styles.input}
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className={Styles.textarea}
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <div>
            <button
              className={Styles.button}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>
          {status && <p className="statusMessage">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
