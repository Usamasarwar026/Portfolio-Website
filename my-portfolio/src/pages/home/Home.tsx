import Navbar from "../../components/navbar/Navbar";
import { IMAGES } from "../../constant/image";
import Projects from "../../sections/projects/Projects";
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import Skills from "../../sections/skills/Skills";
import Experience from "../../sections/experience/Experience";
import Footer from "../../sections/footer/Footer";
import Contact from "../../sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" name="Usama Sarwar" photo={IMAGES.PROFILEPIC} />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
