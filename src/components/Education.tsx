import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.S. in Data Science and Application",
      institution: "Indian Institute of Technology (IIT) Madras",
      period: "2024 - 2028",
      location: "Chennai, India",
      status: "Currently Pursuing",
      color: "primary",
      description: "Comprehensive program covering statistical analysis, machine learning, data visualization, and programming fundamentals."
    },
    {
      degree: "Class 12th",
      institution: "Surajdeo Memorial School",
      period: "2022 - 2024",
      location: "Hajipur, Bihar",
      status: "Completed",
      color: "secondary",
      description: "Focused on Science stream with Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Class 10th",
      institution: "Kendriya Vidyalaya",
      period: "2022",
      location: "Hajipur, Bihar",
      status: "Completed",
      color: "accent",
      description: "Strong foundation in core subjects with emphasis on analytical thinking."
    }
  ];

  const certifications = [
    {
      title: "Forecasting using Machine Learning Tools",
      provider: "NPTEL",
      year: "2024",
      status: "Certified"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 bg-primary/10";
      case "secondary":
        return "border-secondary/30 bg-secondary/10";
      case "accent":
        return "border-accent/30 bg-accent/10";
      default:
        return "border-primary/30 bg-primary/10";
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-lg ${getColorClasses(edu.color)} flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8 text-current" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground mb-2 sm:mb-0">
                        {edu.degree}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={edu.status === "Currently Pursuing" ? "border-primary text-primary" : "border-muted text-muted-foreground"}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary mb-3">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-secondary bg-clip-text text-transparent">
              Certifications
            </h3>
            
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="bg-surface/50 border-glass-border backdrop-blur-glass p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(educationData.length + index) * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {cert.provider} • {cert.year}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-success text-success self-start sm:self-center mt-2 sm:mt-0">
                      {cert.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;