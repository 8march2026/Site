import React from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ onButtonClick }) => {
  return (
    <section className="welcome-screen">
      <div className="animated-background">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
        <div className="floating-circle circle1" />
        <div className="floating-circle circle2" />
        <div className="floating-circle circle3" />
        <div className="floating-circle circle4" />
        <div className="floating-circle circle5" />
      </div>

      <div className="content-wrapper">
        <motion.div
          className="top-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="label-line" />
          <span className="label-text">весна 2026</span>
          <span className="label-line" />
        </motion.div>

        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          С 8 Марта
        </motion.h1>

        <div className="simple-divider" />

        <motion.h2
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Наши прекрасные девочки
        </motion.h2>

        <motion.p
          className="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Пусть этот день подарит вам море улыбок, нежность весеннего солнца и
          ощущение счастья. Вы — наше вдохновение.
        </motion.p>

        <div className="minimal-scroll">
          <div className="scroll-dot" />
          <span className="scroll-label">scroll</span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeScreen;
