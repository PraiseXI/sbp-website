"use client";
import styles from "./page.module.scss";
import Slideshow from "../components/Slideshow";
import Testimonials from "@/components/Testimonials";
import PortfolioParallax from "../components/portfolioparallax/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <p> HERO </p>
      <p> ABOUT </p>
      <PortfolioParallax />
      HOMEPAGE
    </main>
  );
}
