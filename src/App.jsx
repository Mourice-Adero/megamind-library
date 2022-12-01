import { useState } from "react";
import header from "./components/header";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Featured from "./components/Featured";
import Popular from "./components/Popular";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Featured />
      <Popular />
      <Carousel />
      <Footer/>
    </div>
  );
}

export default App;
