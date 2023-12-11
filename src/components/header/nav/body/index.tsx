import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate } from "../../anim";

export default function index() {
  const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png",
    },
    {
      title: "Portraits",
      href: "/portraits",
      src: "portraits.png",
    },
    {
      title: "Travel",
      href: "/travel",
      src: "travel.png",
    },
    {
      title: "Projects",
      href: "/projects",
      src: "projects.png",
    },
    {
      title: "About",
      href: "/about",
      src: "about.png",
    },
    {
      title: "Prints",
      href: "https://shotbypraise-store.vercel.app/",
      src: "prints.png",
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png",
    },
  ];

  const getChars = (title: string): JSX.Element[] => {
    console.log(translate)
    let chars: JSX.Element[] = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01 ]}
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
          <Link href={link} key={`l_${index}`}>
            <p>{getChars(title)}</p>
          </Link>
        );
      })}
    </div>
  );
}
