import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ background: "var(--bg-void)" }}>
      <Sidebar />
      <main className="md:ml-60 pt-12 md:pt-0">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
