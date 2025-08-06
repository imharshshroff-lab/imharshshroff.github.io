import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Palette,
  Monitor,
  Wrench
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
      color: "primary"
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: ["Pandas", "NumPy", "PyTorch", "Scikit-learn", "Machine Learning", "Forecasting"],
      color: "secondary"
    },
    {
      title: "Development Tools",
      icon: Monitor,
      skills: ["VS Code", "Jupyter Notebook", "Git", "GitHub"],
      color: "accent"
    },
    {
      title: "Design & Media",
      icon: Palette,
      skills: ["Canva", "Photoshop", "DaVinci Resolve", "Premier Pro"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10";
      case "secondary":
        return "border-secondary/20 bg-secondary/5 text-secondary hover:bg-secondary/10";
      case "accent":
        return "border-accent/20 bg-accent/5 text-accent hover:bg-accent/10";
      case "success":
        return "border-success/20 bg-success/5 text-success hover:bg-success/10";
      default:
        return "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10";
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="outline"
                      className={`${getColorClasses(category.color)} transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-surface border-glass-border backdrop-blur-glass p-8 shadow-card inline-block">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                I'm always expanding my skillset and staying updated with the latest 
                technologies in data science, machine learning, and web development. 
                Currently exploring advanced ML techniques and cloud computing platforms.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;