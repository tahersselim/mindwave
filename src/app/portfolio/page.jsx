import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <Image src="/maintenance.jpg" width={1100} height={500} alt="maintenance"/>
    </div>
  );
};

export default Portfolio;
