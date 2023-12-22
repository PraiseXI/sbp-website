'use client';
import styles from "../portfolioparallax/style.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "../../hooks/useDimension";

interface ColumnProps {
  images: string[];
  y: any;
}

const images: string[] = [
  "2022.01.19 - Portrait - Aurelie-2.webp",
  "2022.01.30 - Kaliya -33.webp",
  "2022.01.30 - Kaliya -34.webp",
  "2022.02.06 - Shaira-23.webp",
  "Adeola - 15.04.21 - ShotbyPraise -42.webp",
  "Kamisi - 25.02.21 - ShotbyPraise -19.webp",
  "Sade - 16.08.21 - ShotbyPraise-3.webp",
  "Sandra-Personal-4.webp",
  "SBP-Alia-21.webp",
  "SBP-Alia-38.webp",
  "Tyez - 25.08.21 - ShotbyPraise-8.webp",
  "2022.01.19 - Portrait - Aurelie-10.webp",
];

export default function PortfolioParallax() {
  const container = useRef(null);
  const { height } = useDimension();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y = 0 }: ColumnProps) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src: string, i: number) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image 
            src={`/images/${src}`} 
            alt="image" 
            fill
            sizes="(max-width: 768px) 100vw, 700px"
             />
          </div>
        );
      })}
    </motion.div>
  );
};
