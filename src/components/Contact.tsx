import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram,
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "imharsharyan@gmail.com",
      href: "mailto:imharsharyan@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harsharyann/",
      href: "https://linkedin.com/in/harsharyann/",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/harsharyann",
      href: "https://github.com/harsharyann",
      color: "accent"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@harsharyann_",
      href: "https://instagram.com/harsharyann_",
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20";
      case "secondary":
        return "border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20";
      case "accent":
        return "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20";
      case "success":
        return "border-success/30 bg-success/10 text-success hover:bg-success/20";
      default:
        return "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, data enthusiasts, 
              and potential collaborators. Let's build something amazing together!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label}
                className="bg-surface/50 border-glass-border backdrop-blur-glass p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={method.href}
                  target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-200"
                >
                  <div className={`p-4 rounded-lg transition-all duration-200 ${getColorClasses(method.color)}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-surface border-glass-border backdrop-blur-glass p-8 shadow-card inline-block">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">Currently based in Bihar, India</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Let's Collaborate!
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-lg">
                Whether you're interested in data science projects, creative collaborations, 
                or just want to connect, I'd love to hear from you. Drop me a message!
              </p>
              
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-primary-foreground"
              >
                <a href="mailto:imharsharyan@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-glass-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Harsh Aryan. Built with passion and React.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;