import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = ({ active = true, duration = 5000 }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    if (duration) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [duration]);

  if (!isActive) return null;

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={200}
      recycle={false}
      colors={[
        "#ff6b9d",
        "#ffb6c1",
        "#ffd700",
        "#ff69b4",
        "#ff1493",
        "#8a4fff",
        "#00ff00",
        "#00ffff",
      ]}
      confettiSource={{
        x: 0,
        y: 0,
        w: windowSize.width,
        h: 0,
      }}
    />
  );
};

export default Confetti;
