import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <AnimatedCursor
        innerSize={12}
        outerSize={10}
        color="93, 39, 255"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={8}
      />

      <Navbar />
      <div className=" container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
