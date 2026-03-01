import React from "react";
import { motion } from "framer-motion";

const MemoriesTab = () => {
  const memories = [
    {
      id: 1,
      image: g1,
      date: "1 сентября",
      title: "День знаний",
      description:
        "Как красиво вы выглядели в этот день! Цветы, улыбки и море цветов.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400",
      date: "Осенний бал",
      title: "Школьный бал",
      description: "Вы были самыми красивыми на школьном балу.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400",
      date: "Новый год",
      title: "Новогодний огонек",
      description: "Наши снегурочки! Вы создали настоящую сказку.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=400",
      date: "Зимой",
      title: "Лыжный поход",
      description: "Как мы весело провели время все вместе!",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400",
      date: "23 февраля",
      title: "Поздравление",
      description: "Спасибо за ваши поздравления и подарки!",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
      date: "Каждый день",
      title: "Наши будни",
      description: "Спасибо, что делаете каждый день особенным.",
    },
  ];

  return (
    <div className="memories-grid">
      {memories.map((memory, index) => (
        <div
          key={memory.id}
          className="memory-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
        >
          <div className="memory-image-container">
            <motion.img
              src={memory.image}
              alt={memory.title}
              className="memory-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="memory-info">
            <div
              className="memory-date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {memory.date}
            </div>
            <h3 className="memory-title">{memory.title}</h3>
            <p className="memory-description">{memory.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoriesTab;
