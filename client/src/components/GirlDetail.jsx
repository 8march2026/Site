import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { girlsData } from "../data/girlsData";

const GirlDetail = () => {
  const { id } = useParams();
  const girl = girlsData.find((g) => g.id === parseInt(id));
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!girl) {
    return <div>Девочка не найдена</div>;
  }

  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="profile-container">
        <Link to="/" className="back-button">
          <span>←</span>
          <span>Назад</span>
        </Link>

        <div className="profile-header">
          <div className="profile-photo">
            <img src={girl.photos[0]} alt={girl.name} />
            <span className="photo-count">{girl.photos.length} фото</span>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{girl.name}</h1>

            <div className="profile-tags"></div>

            <p className="profile-short-desc">{girl.shortDesc}</p>
          </div>
        </div>

        <div className="gallery-section">
          <h2 className="gallery-title">Галерея</h2>
          <div className="gallery-grid">
            {girl.photos.map((photo, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img src={photo} alt={`${girl.name} ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="photo-modal-close"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
            <motion.img
              src={selectedPhoto}
              alt=""
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GirlDetail;
