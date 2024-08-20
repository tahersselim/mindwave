"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./Navbar.module.css";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
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
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={Styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
        <button
          className={Styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
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
