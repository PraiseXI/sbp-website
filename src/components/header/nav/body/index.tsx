import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate } from "../../anim";

export default function index() {
  const links = [
    {
      title: "Projects",
      href: "/projects",
      src: "projects.png",
    },
    {
      title: "Travel",
      href: "/travel",
      src: "travel.png",
    },
    {
      title: "Services",
      href: "/services",
      src: "portraits.png",
    },
    {
      title: "Prints",
      href: "https://shotbypraise-store.vercel.app/",
      src: "prints.png",
    },
    {
      title: "About",
      href: "/about",
      src: "about.png",
    },
  ];

  /**
   * Returns an array of JSX elements representing each character in the title.
   * @param title - The title string.
   * @returns An array of JSX elements.
   */
  const getChars = (title: string): JSX.Element[] => {
    let chars: JSX.Element[] = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <a href={href} key={`l_${index}`}>
            <p>{getChars(title)}</p>
          </a>
        );
      })}
    </div>
  );
}
