import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  return (
    <section id="photos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Photo Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments captured from my journey and experiences
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid gap-8">
            <Card className="bg-surface/50 border-glass-border backdrop-blur-glass p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <img 
                    src="/lovable-uploads/f5872d16-96ac-4075-a0ce-fe9f840b5033.png"
                    alt="Harsh Aryan at IIT Madras event"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    At IIT Madras Campus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    Captured during one of the vibrant events at IIT Madras campus. 
                    This colorful graffiti wall represents the creative and diverse 
                    spirit of our institution.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The campus life at IIT Madras is filled with learning opportunities, 
                    cultural events, and memorable experiences that shape our academic 
                    and personal growth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;