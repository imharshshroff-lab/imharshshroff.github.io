import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey and passion for data science
            </p>
          </div>

          {/* Main Content */}
          <Card className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 md:p-12 shadow-card">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am a passionate and driven second-year data science student currently pursuing a 
                  B.S. in Data Science and Applications at IIT Madras. With a solid foundation in 
                  programming and a keen interest in machine learning, I am dedicated to transforming 
                  data into actionable insights.
                </p>
              </div>

              {/* Current Focus */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am actively developing my skills in data analysis, forecasting, and full-stack 
                  development to build impactful projects. My goal is to leverage the power of data 
                  science and machine learning to solve real-world problems and create meaningful solutions.
                </p>
              </div>

              {/* Beyond Academics */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Beyond Academics</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  When I'm not coding or analyzing data, you'll find me editing videos for creative 
                  projects, participating in elocution competitions, or leading events at college fests. 
                  I believe in the importance of balanced growth - combining technical expertise with 
                  creative expression and leadership skills.
                </p>
              </div>

              {/* Achievements Highlight */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h4 className="text-xl font-semibold mb-2 text-primary">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    Pursuing B.S. Data Science at IIT Madras, with certifications in 
                    Machine Learning and Forecasting from NPTEL.
                  </p>
                </div>
                
                <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
                  <h4 className="text-xl font-semibold mb-2 text-secondary">Leadership & Events</h4>
                  <p className="text-muted-foreground">
                    Event Head at Paradox IITM Fest, House Captain, and winner of 
                    multiple competitions at regional and cluster levels.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;