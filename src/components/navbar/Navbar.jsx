"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
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
          {session.status === "authenticated" ? (
            <button className={Styles.logout} onClick={signOut}>
              Logout
            </button>
          ) : (
            <button className={Styles.logout}>
              <a href="/dashboard/login">Login</a>
            </button>
          )}
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
          {session.status === "authenticated" ? (
            <button className={Styles.logoutbutton} onClick={signOut}>
              logout
            </button>
          ) : (
            <button className={Styles.logoutbutton} onClick={signOut}>
              login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
