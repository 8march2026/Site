import React from "react";
import { motion } from "framer-motion";
import g1 from "../assets/photo_5267154489897063415_y.jpg";
import g2 from "../assets/photo_5267154489897063416_y.jpg";
import g3 from "../assets/photo_5267154489897063420_y.jpg";
import g4 from "../assets/photo_5267154489897063418_y.jpg";
import g5 from "../assets/photo_5267154489897063422_y.jpg";
import g6 from "../assets/photo_5267154489897063413_y.jpg";

const CongratsTab = () => {
  const congratsItems = [
    {
      id: 1,
      image: g2,
      text: "Дорогие девочки! Пусть эта весна подарит вам море улыбок и солнечного тепла. Вы делаете наш класс ярче и добрее!",
      position: "left",
    },
    {
      id: 2,
      image: g1,
      text: "С 8 Марта! Оставайтесь такими же красивыми, умными и замечательными. Пусть сбываются самые смелые мечты!",
      position: "right",
    },
    {
      id: 3,
      image: g3,
      text: "Вы — наше вдохновение! Спасибо за то, что вы есть. Пусть каждый день дарит только радость.",
      position: "left",
    },
    {
      id: 4,
      image: g4,
      text: "С праздником весны! Желаем вам быть счастливыми, любимыми и неповторимыми. Мы вас очень ценим!",
      position: "right",
    },
    {
      id: 5,
      image: g5,
      text: "Пусть этот день подарит море цветов и приятных сюрпризов. Вы лучшие!",
      position: "left",
    },
    {
      id: 6,
      image: g6,
      text: "С 8 Марта! Весны — в душе, любви — в сердце, везенья — во всех делах и начинаниях. Пусть все мечты сбываются!",
      position: "right",
    },
  ];

  return (
    <div className="congrats-grid">
      {congratsItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`congrats-item congrats-${item.position}`}
          initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="congrats-image-container">
            <motion.img
              src={item.image}
              alt=""
              className="congrats-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="congrats-text-container">
            <motion.p
              className="congrats-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              "{item.text}"
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CongratsTab;
