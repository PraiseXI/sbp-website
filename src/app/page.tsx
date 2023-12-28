"use client";
import Testimonials from "@/components/Testimonials";
import PortfolioParallax from "@/components/portfolioparallax/index";
import Hero from "@/components/hero/index";
import About from "@/components/aboutsection/index";
import VideoSection from "@/components/videohighlight/index";

const heroText = "SHOTBYPRAISE STUDIOS";

export default function Home() {
  return (
      <div className="p-2 rounded-lg">
        <Hero />
        <About />
        <PortfolioParallax />
        <VideoSection />
      </div>
  );
}
