"use client";
import styles from "./links.module.css";
import Navlink from "../navlink/navlink";
import { useState } from "react";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className="contianer">
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title}></Navlink>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Navlink item={{ title: "Admin", path: "/admin" }}></Navlink>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }}></Navlink>
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title}></Navlink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
