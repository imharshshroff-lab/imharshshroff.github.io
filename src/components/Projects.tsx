import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Play, 
  Code, 
  Calendar,
  Users,
  Award
} from "lucide-react";

const Projects = () => {
  const technicalProjects = [
    {
      title: "Machine Learning Projects",
      description: "I am currently working on several projects to apply my skills in machine learning and data analysis. These projects will showcase my expertise in Python, PyTorch, and data forecasting techniques.",
      status: "In Development",
      technologies: ["Python", "PyTorch", "Pandas", "Scikit-learn"],
      color: "primary",
      comingSoon: true
    }
  ];

  const editingProjects = [
    {
      title: "Paradox IITM Fest Play",
      description: "Edited the performance of 'Jo Main Bhi Hoon, Tum Bhi Ho' by Aayam: IITM BS Drama Society at Paradox'25. This Absurd Theatre piece uses surreal scenes to challenge perceptions of political rhetoric and social issues.",
      url: "https://youtu.be/V_SHkfIXBd4?si=qa4AGCP8T10lHQay",
      audience: "500+ viewers",
      technologies: ["DaVinci Resolve", "Video Editing", "Post-Production"],
      color: "secondary",
      type: "video"
    },
    {
      title: "Instagram Content Creation",
      description: "Created and edited engaging Instagram reels showcasing creative storytelling and visual effects. These projects demonstrate my skills in short-form content creation and social media engagement.",
      links: [
        "https://www.instagram.com/p/DMJEZaGz_GX/?igsh=MXZiMXQwMTdlc3A5aw==",
        "https://www.instagram.com/reel/DLW3ROFAJdB/?igsh=Z21la21zZXlyMjRn",
        "https://www.instagram.com/reel/DLP_Oyzz4hO/?igsh=MTR5bDJ6ZzlrdHRlZg=="
      ],
      technologies: ["Premier Pro", "Social Media", "Creative Direction"],
      color: "accent",
      type: "social"
    }
  ];

  const achievements = [
    {
      title: "Event Head at Paradox",
      description: "Led events at IITM Fest with an audience of 500+ people",
      icon: Users
    },
    {
      title: "Elocution Champion",
      description: "1st Position at cluster level among 50+ schools",
      icon: Award
    },
    {
      title: "Spell Bee Champion",
      description: "3rd Position at regional level among 80+ schools",
      icon: Award
    },
    {
      title: "NDA 2024",
      description: "Successfully cleared the National Defence Academy examination",
      icon: Award
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 bg-primary/10 text-primary";
      case "secondary":
        return "border-secondary/30 bg-secondary/10 text-secondary";
      case "accent":
        return "border-accent/30 bg-accent/10 text-accent";
      default:
        return "border-primary/30 bg-primary/10 text-primary";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projects & Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects, creative work, and achievements
            </p>
          </div>

          {/* Technical Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-primary">Technical Projects</h3>
            <div className="grid gap-8">
              {technicalProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                        {project.comingSoon && (
                          <Badge className={getColorClasses(project.color)}>
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-muted text-muted-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className={`p-4 rounded-lg ${getColorClasses(project.color)}`}>
                        <Code className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Editing Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-secondary">Creative Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {editingProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${getColorClasses(project.color)}`}>
                      <Play className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.audience && (
                    <p className="text-sm text-accent mb-4">
                      <Users className="inline w-4 h-4 mr-1" />
                      {project.audience}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-muted text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.url ? (
                    <Button 
                      asChild
                      className={`${getColorClasses(project.color)} hover:scale-105 transition-transform`}
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Watch Video
                      </a>
                    </Button>
                  ) : project.links && (
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-foreground mb-2">View Reels:</p>
                      {project.links.map((link, linkIndex) => (
                        <Button 
                          key={linkIndex}
                          asChild
                          variant="outline"
                          size="sm"
                          className="justify-start"
                        >
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Reel {linkIndex + 1}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-accent">Achievements & Leadership</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="bg-surface/50 border-glass-border backdrop-blur-glass p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4 inline-block">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;