import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-accent rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-glow-pulse hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/f7b21693-9318-4896-9f79-5b6bfb0c6f82.png" 
              alt="Harsh Aryan Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Harsh Aryan
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in">
            Data Science Student & ML Enthusiast
          </p>
          
          {/* Institution */}
          <p className="text-lg text-accent mb-8 animate-slide-in" style={{animationDelay: '0.2s'}}>
            B.S. Data Science & Applications • IIT Madras
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Passionate about transforming data into actionable insights. 
            Developing expertise in machine learning, forecasting, and full-stack development 
            to build impactful solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a 
              href="https://github.com/harsharyann" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/harsharyann/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/harsharyann_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:imharsharyan@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;