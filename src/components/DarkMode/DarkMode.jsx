"use client"
import React from "react";
import Styles from "./DarkMode.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/Themecontext";

const DarkMode = () => {
const { toggle,mode } = useContext(ThemeContext)
    return (
    <div className={Styles.container} onClick = {toggle}>
      <div className={Styles.icon}>🌙</div>
      <div className={Styles.icon}>🔆</div>
      <div
        className={Styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
