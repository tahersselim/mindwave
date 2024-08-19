import Link from "next/link";
import React from "react";
import Styles from './button.module.css'

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={Styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
