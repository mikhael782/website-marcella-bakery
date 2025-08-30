import { useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Menu from "./Components/Menu";

export default function App() {
  // Ini untuk scroll About Us
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Ini untuk scroll Menu
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onAboutClick={scrollToAbout} 
        onMenuClick={scrollToMenu}
      />
      <Hero />
      <About ref={aboutRef}/>
      <Menu ref={menuRef}/>
    </div>
  );
}
