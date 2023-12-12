import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";
import { useState } from "react";
import Image from "./image";
import Footer from "./Footer";

export default function index() {
  interface Link {
    title: string;
    href: string;
    src: string;
  }
  interface ImageProps {
    src: String;
    isActive: boolean;
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
      src: "services.png",
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

  type SelectedLinkType = {
    isActive: boolean;
    index: number;
  };

  const [selectedLink, setSelectedLink] = useState<SelectedLinkType>({
    isActive: false,
    index: 0,
  });

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
      <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
    </motion.div>
  );
}
