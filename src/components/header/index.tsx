"use client";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import { useState, useEffect } from "react";
import Nav from "./nav";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setIsActive(false);
  }, [pathName]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">SHOTBYPRAISE</Link>

        {/* Toggle the isActive state when the element is clicked */}
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div className={styles.placeholder}></div>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            {/* Animate the text based on the isActive state */}
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.contactContainer}
        >
          <Link href="/contact">Contact</Link>
          <div className={styles.el}>
            <div className={styles.placeholder}></div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      {/* Render the Nav component when isActive is true */}
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
