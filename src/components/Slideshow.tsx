import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Slideshow = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: 'snap',
    renderMode: 'performance',
    rubberband: true,
    slides: {spacing: 10},
    defaultAnimation: {
      duration: 2000,
    },
  });

  const timer = useRef<number>();
  const interval = 5000; // Change slide every 5 seconds

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
    <div ref={sliderRef} className="keen-slider" style={{ height: '100vh', width: '100vw' }}>
      <div className="keen-slider__slide" style={{ backgroundColor: 'red' }}>1</div>
      <div className="keen-slider__slide" style={{ backgroundColor: 'green' }}>2</div>
      <div className="keen-slider__slide" style={{ backgroundColor: 'blue' }}>3</div>
    </div>
  );
};

export default Slideshow;
