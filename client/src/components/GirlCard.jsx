import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GirlCard = ({ girl, index }) => {
  return (
    <motion.div
      className="girl-card card-3d card-reflect glow-on-hover"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/girl/${girl.id}`} style={{ textDecoration: "none" }}>
        <div className="card-image-container card-zoom">
          <motion.img
            src={girl.photos[0]}
            alt={girl.name}
            className="card-image"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="card-image-overlay" />
        </div>

        <div className="card-info">
          <h3 className="card-name">
            {girl.name.split("").map((char, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {char}
              </motion.span>
            ))}
          </h3>
          <p className="card-description">{girl.shortDesc}</p>

          <motion.button
            className="card-button button-sparkle button-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Подробнее</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default GirlCard;
