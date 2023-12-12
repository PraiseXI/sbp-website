import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";
import { motion} from "framer-motion";
import { translate, blur } from "../../anim";

export default function index({ links, selectedLink, setSelectedLink }) {
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
          <a
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index })}}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index })}}
            onTouchStart={() => {
              setSelectedLink({ isActive: true, index })}}
            onTouchEnd={() => {
              setSelectedLink({ isActive: false, index })}}
            href={href}
            key={`l_${index}`}
          >
            <motion.p variants={blur} initial="initial" animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>{getChars(title)}</motion.p>
          </a>
        );
      })}
    </div>
  );
}
