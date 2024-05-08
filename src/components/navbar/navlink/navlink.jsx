"use client";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

const Navlink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
