import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import QueRevelaraTuCielo from "./components/Benefits";
import RitualDeLectura from "./components/Ritual";
import ServiciosAstrologicos from "./components/Services";
import AboutMe from "./components/AboutMe";
import CTAFinal from "./components/CTA";

export default function Home() {
    return (
      <div>
        <Hero/>
        <AboutMe/>
        <QueRevelaraTuCielo/>
        <RitualDeLectura/>
        <ServiciosAstrologicos/>
        <CTAFinal/>
      </div>
    );
  }
  