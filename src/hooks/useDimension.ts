const { useEffect, useState } = require("react");

/**
 * Custom hook that returns the current dimensions of the window.
 * @returns An object containing the width and height of the window.
 */
const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimension();

    window.addEventListener("resize", updateDimension)

    return () => { window.removeEventListener("resize", updateDimension)}
  }, []);

  return dimension
};

export default useDimension
