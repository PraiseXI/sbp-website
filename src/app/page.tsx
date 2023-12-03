"use client"
import  { NavigationBar } from "@/components/Navbar";
import Slideshow from "../components/Slideshow"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <a href="/" className="text-5xl font-bold mb-4">SHOTBYPRAISE</a>
      <NavigationBar />
      <Slideshow />
    </div>
  );
}
