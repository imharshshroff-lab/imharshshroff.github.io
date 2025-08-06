import { Card } from "@/components/ui/card";
import { Camera, Heart, Eye } from "lucide-react";

const Photography = () => {
  const photographyImages = [
    {
      src: "/lovable-uploads/b4e65e4d-e05e-41d5-834c-6d2b2314ebcf.png",
      alt: "Cat in natural habitat",
      title: "Nature's Serenity",
      description: "Capturing the peaceful moments of wildlife in their natural environment"
    },
    {
      src: "/lovable-uploads/63becaf3-89e0-4cd0-b3ff-f1c62e383ebd.png",
      alt: "Artistic water splash",
      title: "Liquid Art",
      description: "The mesmerizing beauty of water captured in motion"
    },
    {
      src: "/lovable-uploads/df5358b9-c06e-4130-a25a-5418a335530f.png",
      alt: "Sports field at sunset",
      title: "Golden Hour",
      description: "Where athletics meets the magic of sunset lighting"
    },
    {
      src: "/lovable-uploads/0537c82c-99fc-4335-bdbf-25e0f80e1dc5.png",
      alt: "Adorable puppy",
      title: "Innocent Eyes",
      description: "Capturing the pure joy and innocence of our furry companions"
    }
  ];

  return (
    <section id="photography" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Photography Portfolio
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-primary" />
              <Heart className="w-6 h-6 text-accent" />
              <Eye className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I have a deep passion for photography and natural clicks that capture the essence of life's 
              beautiful moments. Through my lens, I explore the fascinating world around us - from the 
              serene beauty of nature to the candid emotions of everyday life. Here are some glimpses 
              of my photographic journey, where each frame tells a story and every shot is a celebration 
              of the extraordinary in the ordinary.
            </p>
          </div>

          {/* Photography Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {photographyImages.map((image, index) => (
              <Card 
                key={image.title}
                className="bg-surface/50 border-glass-border backdrop-blur-glass overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Photography Philosophy */}
          <Card className="bg-gradient-surface border-glass-border backdrop-blur-glass p-8 md:p-12 shadow-card text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
                "Photography is the poetry of the frozen moment"
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Every photograph is a glimpse into a world of emotions, stories, and fleeting moments 
                that would otherwise be lost to time. My camera is not just a tool, but a bridge that 
                connects the beauty I see with the hearts of those who view my work.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Camera className="w-5 h-5" />
                <span className="text-sm font-medium">Capturing Life's Beautiful Moments</span>
                <Camera className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Photography;