"use client";
import styles from "./page.module.scss";
import Slideshow from "../components/Slideshow";
import Testimonials from "@/components/Testimonials";
import PortfolioParallax from "../components/portfolioparallax/index";
import Hero from "@/components/hero/index";

const heroText = "SHOTBYPRAISE STUDIOS";

export default function Home() {
  return (
      <div className="p-2 rounded-lg">
        <Hero />
        <PortfolioParallax />
        HOMEPAGE
      </div>
  );
}
