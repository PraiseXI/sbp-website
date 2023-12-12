import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";

export default function index() {
  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="enter"
    >
      <div className={styles.wrapper}>
        <Body />
        {/* Footer */}
      </div>
      {/* Image */}
    </motion.div>
  );
}
