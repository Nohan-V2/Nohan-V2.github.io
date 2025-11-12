import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="app-container relative z-0 flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden bg-[#151515] font-space text-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
