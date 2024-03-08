import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
        </div>
      </main>
    </>
  );
}

export default App;
