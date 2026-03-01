import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const newFlowers = [];
    const flowerEmojis = ["🌸", "🌷", "🌹", "🌺", "🌻", "🌼", "💐"];

    for (let i = 0; i < 15; i++) {
      newFlowers.push({
        id: i,
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 30 + 20,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        rotate: Math.random() * 360,
      });
    }

    setFlowers(newFlowers);
  }, []);

  return (
    <div className="floating-flowers-container">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="floating-flower"
          style={{
            left: `${flower.left}%`,
            top: `${flower.top}%`,
            fontSize: `${flower.size}px`,
            rotate: `${flower.rotate}deg`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [flower.rotate, flower.rotate + 10, flower.rotate],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {flower.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
