import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container z-0 relative font-space flex flex-col items-center gap-20 bg-[#151515] text-white min-h-screen w-full overflow-hidden">
      {/* Décoration en haut à gauche */}
      <img 
        src="/blue-design-left.svg" 
        alt="" 
        className="absolute -z-1 top-33 left-0 w-[530px] h-[129px]"
      />
      
      {/* Décoration en haut à droite */}
      <img 
        src="/blue-oval.svg" 
        alt="" 
        className="absolute z-20 top-100 right-150 w-[129px] h-[129px]"
      />
      
      <Header />
      <Hero />
      <Skills />
      <Projects />
      
      {/* Décoration en bas à droite */}
      <img 
        src="/blue-design-right.svg" 
        alt="" 
        className="absolute -z-1 top-217 -right-40 w-[530px] h-[129px]"
      />
      
      {/* Décoration en bas à gauche (rotation de 180 degrés) */}
      <img 
        src="/blue-design-left.svg" 
        alt="" 
        className="absolute z-0 bottom-35 -left-51 w-[530px] h-[129px]"
      />
      
      <Contact />
    </div>
  );
}

export default App;
