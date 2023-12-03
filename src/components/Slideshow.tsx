import React, { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/legacy/image";

const imageUrls = [
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/4000/3000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
  "https://picsum.photos/5000/4000",
];

const Slideshow = () => {
  const [opacities, setOpacities] = useState(
    new Array(imageUrls.length).fill(0)
  );

  const [sliderRef, slider] = useKeenSlider({
    slides: imageUrls.length,
    loop: true,
    mode: "free",
    renderMode: "performance",
    drag: false,
    defaultAnimation: {
      duration: 500,
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(slide => slide.portion);
      setOpacities(new_opacities);
    },
  });

  const timer = useRef<number>();
  const interval = 4000; // Change slide every 5 seconds

  useEffect(() => {
    timer.current = window.setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, interval);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className="fader">
      {imageUrls.map((src, idx) => (
        <div
          key={idx}
          className="fader__slide"
          style={{ opacity: opacities[idx] || 0 }}
        >
          <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
