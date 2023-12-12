"use client";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import { useState } from "react";
import Nav from "./nav";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

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

        <motion.div variants={opacity} className={styles.contactContainer}>
          <p className={styles.contact}>Contact</p>
          <div className={styles.el}>
            <svg
              className={styles["contact-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
              <line x1="2" y1="7" x2="22" y2="7"></line>
              <path d="M22 7l-10 7L2 7"></path>
            </svg>
            <p>Contact</p>
          </div>
        </motion.div>
      </div>
      {/* Render the Nav component when isActive is true */}
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
