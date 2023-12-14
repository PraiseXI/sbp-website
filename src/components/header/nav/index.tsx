/**
 * Renders the navigation component for the header.
 */
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";
import { useState } from "react";
import Footer from "./Footer";

export default function index() {
  // Define interfaces for Link and ImageProps
  interface Link {
    title: string;
    href: string;
    src: string;
  }
  interface ImageProps {
    src: String;
    isActive: boolean;
  }

  // Define an array of links
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
      src: "services.png",
    },
    {
      title: "Prints",
      href: "/shop",
      src: "prints.png",
    },
    {
      title: "About",
      href: "/about",
      src: "about.png",
    },
  ];

  // Define the type for selectedLink state
  type SelectedLinkType = {
    isActive: boolean;
    index: number;
  };

  // Initialize selectedLink state
  const [selectedLink, setSelectedLink] = useState<SelectedLinkType>({
    isActive: false,
    index: 0,
  });

  // Render the navigation component
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
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}
