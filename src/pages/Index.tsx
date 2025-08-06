import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Photography from "@/components/Photography";
import PhotoGallery from "@/components/PhotoGallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Floating Navigation */}
      <FloatingNavbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Photography />
        <PhotoGallery />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
