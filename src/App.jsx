import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main
        className="w-full h-full m-0"
        style={{
          backgroundImage: "url('/assets/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
