import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MesProgrammes from "./pages/MesProgrammes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/main.scss";
import PersonalPage from "./pages/PersonalPage";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import FaqPage from "./pages/FaqPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-page" element={<PersonalPage />} />
          <Route path="/mes-programmes" element={<MesProgrammes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq-page" element={<FaqPage />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
