import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Languages from "./components/Languages";

function App() {
  return (
    <div className="font-[family-name:--font-display] app-container flex flex-col items-center bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Languages />
    </div>
  );
}

export default App;
