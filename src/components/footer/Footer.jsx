import React from "react";
import Styles from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className={Styles.mindwavecontainer}>
        <p>&copy; {new Date().getFullYear()} MindWave. All rights reserved.</p>
      </div>
      <div className={Styles.container}>
        <p>
          <a className={Styles.containerprivacy} 
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <span> | </span>
          <a className={Styles.containerterms} 
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </p>
      </div>
      <div className={Styles.iconscontainer}>
        <Image
          src="/1.png"
          className={Styles.iconcontainer}
          width={25}
          height={25}
          alt="socialMedia"
        />
        <Image
          src="/2.png"
          className={Styles.iconcontainer}
          width={25}
          height={25}
          alt="socialMedia"
        />
        <Image
          src="/3.png"
          className={Styles.iconcontainer}
          width={25}
          height={25}
          alt="socialMedia"
        />
        <Image
          src="/4.png"
          className={Styles.iconcontainer}
          width={25}
          height={25}
          alt="socialMedia"
        />
      </div>
    </div>
  );
};

export default Footer;
