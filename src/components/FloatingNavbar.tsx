import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Code, 
  GraduationCap, 
  Trophy, 
  Mail,
  Menu,
  X,
  Camera,
  Image
} from "lucide-react";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Trophy },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "photos", label: "Gallery", icon: Image },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:flex ${
        isScrolled 
          ? 'bg-glass-bg/80 backdrop-blur-glass border border-glass-border shadow-elevation' 
          : 'bg-glass-bg/40 backdrop-blur-glass border border-glass-border/50'
      } rounded-2xl px-6 py-3`}>
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Menu Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-glass-bg/80 backdrop-blur-glass border border-glass-border' 
              : 'bg-glass-bg/40 backdrop-blur-glass border border-glass-border/50'
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute top-20 right-6 bg-glass-bg/90 backdrop-blur-glass border border-glass-border rounded-2xl p-4 shadow-elevation">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNavbar;