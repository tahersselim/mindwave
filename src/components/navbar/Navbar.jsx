"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import DarkMode from "../DarkMode/DarkMode";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className={Styles.container}>
        <Link className={Styles.logo} href="/">
          MindWave
        </Link>

        <div className={Styles.links}>
          <DarkMode />
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
          >
            Logout
          </button>
        </div>

        <Image
          src="/menu.png"
          alt="menu"
          className={Styles.mobmenu}
          width={30}
          height={30}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={Styles.navmenu}
          style={{ display: showMenu ? "flex" : "none" }}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={Styles.link}
              onClick={() => setShowMenu(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
