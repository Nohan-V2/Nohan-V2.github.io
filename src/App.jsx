import Header from "./components/Header";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-space app-container flex flex-col items-center bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Languages />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
