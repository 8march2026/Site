import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import GirlCard from "./components/GirlCard";
import GirlDetail from "./components/GirlDetail";
import Tabs from "./components/Tabs";
import CongratsTab from "./components/CongratsTab";
import MemoriesTab from "./components/MemoriesTab";
import { girlsData } from "./data/girlsData";
import "./styles/style.css";

function App() {
  const tabsData = [
    {
      icon: "💝",
      title: "Поздравления",
      content: <CongratsTab />,
    },
  ];

  const scrollToCards = () => {
    const cardsSection = document.getElementById("cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <WelcomeScreen onButtonClick={scrollToCards} />

                <section id="cards-section" className="cards-section">
                  <div className="container">
                    <h2 className="section-title">Наши девочки</h2>
                    <div className="cards-grid">
                      {girlsData.map((girl, index) => (
                        <GirlCard key={girl.id} girl={girl} index={index} />
                      ))}
                    </div>
                  </div>
                </section>

                <section className="tabs-section">
                  <div className="container">
                    <h2 className="section-title">Теплые слова</h2>
                    <p className="section-subtitle">
                      Поздравления и воспоминания от всего класса
                    </p>
                    <Tabs tabs={tabsData} />
                  </div>
                </section>
              </main>
            }
          />
          <Route path="/girl/:id" element={<GirlDetail />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
