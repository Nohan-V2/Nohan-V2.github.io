import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app-container flex flex-col items-center bg-black text-white min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
