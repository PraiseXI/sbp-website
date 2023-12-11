import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";

export default function index() {
  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <p>Nav</p>
        <p>Nav</p>
        <p>Nav</p>
        <p>Nav</p>
        <p>Nav</p>
      </div>
    </motion.div>
  );
}
