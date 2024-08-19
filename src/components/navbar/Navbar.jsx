"use client";
import Link from "next/link";
import React from "react";
import Styles from "./Navbar.module.css";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <Link className={Styles.logo} href="/">
        MindWave
      </Link>
      <div className={Styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={Styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={Styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >logout</button>
      </div>
    </div>
  );
};

export default Navbar;
