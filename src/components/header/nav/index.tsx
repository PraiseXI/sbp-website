import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";
import { useState } from "react";

export default function index() {
  interface Link {
    title: string;
    href: string;
    src: string;
  }

  const links: Link[] = [
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

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          {/* Footer */}
        </div>
      </div>
      {/* Image */}
    </motion.div>
  );
}
