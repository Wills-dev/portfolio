import "./App.css";
import { AboutMe } from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";
import TeamProjects from "./components/TeamProjects";

function App() {
  return (
    <>
      <main
        className="w-full h-full m-0 relative"
        style={{
          backgroundImage: "url('/assets/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-scroll relative w-full h-full bg-[#3c086380] ">
          <Navbar />
          <Hero />
          {/* <AboutMe /> */}
          <Skills />
          <TeamProjects />
          <PersonalProjects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
