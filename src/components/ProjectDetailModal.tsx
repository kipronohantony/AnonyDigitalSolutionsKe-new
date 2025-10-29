import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, Calendar, User, Target, ChevronLeft, ChevronRight, Maximize2, CheckCircle, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailModalProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    role: string;
    duration: string;
    objective: string;
    features: string[];
    gallery: string[];
    liveUrl?: string;
    githubUrl?: string;
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export function ProjectDetailModal({ project, isOpen, onClose, onNavigate }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto p-0 bg-white border-0">
          {/* Accessible Title and Description - Hidden but accessible */}
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">{project.description}</DialogDescription>
          
          {/* Hero Banner */}
          <div className="relative h-[400px] w-full overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center group"
            >
              <X className="text-white group-hover:rotate-90 transition-transform" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                {project.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl md:text-5xl text-white mb-4">{project.title}</h1>
              <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveUrl && (
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2" size={20} />
                  View Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2" size={20} />
                  View Source Code
                </Button>
              )}
            </div>

            {/* Project Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="glass p-6 rounded-2xl border-0 shadow-lg">
                  <User className="text-primary mb-3" size={24} />
                  <h3 className="text-sm text-muted-foreground mb-2">Role</h3>
                  <p className="text-accent">{project.role}</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="glass p-6 rounded-2xl border-0 shadow-lg">
                  <Calendar className="text-secondary mb-3" size={24} />
                  <h3 className="text-sm text-muted-foreground mb-2">Duration</h3>
                  <p className="text-accent">{project.duration}</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="glass p-6 rounded-2xl border-0 shadow-lg">
                  <Target className="text-primary mb-3" size={24} />
                  <h3 className="text-sm text-muted-foreground mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl mb-4">
                Project <span className="text-gradient">Objective</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.objective}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl mb-6">
                Key <span className="text-gradient">Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl glass"
                  >
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-accent">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl mb-6">
                Project <span className="text-gradient">Gallery</span>
              </h2>
              <div className="relative group">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={project.gallery[currentImageIndex]}
                    alt={`Gallery image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Lightbox Button */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <Maximize2 className="text-white" size={20} />
                  </button>
                </div>

                {/* Navigation Arrows */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="text-white" size={24} />
                    </button>
                  </>
                )}

                {/* Thumbnail Navigation */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {project.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                        currentImageIndex === index
                          ? 'ring-2 ring-primary scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <Card className="glass rounded-2xl p-8 border-0 shadow-lg relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 text-primary/20" size={80} />
                  <div className="relative">
                    <p className="text-lg text-accent italic mb-6 leading-relaxed">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                      <div>
                        <p className="text-accent">{project.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* CTA Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center py-12 px-6 rounded-2xl bg-gradient-to-r from-primary to-secondary"
            >
              <h3 className="text-2xl text-white mb-4">
                Interested in something similar?
              </h3>
              <p className="text-white/90 mb-6">
                Let's collaborate and create something amazing together!
              </p>
              <Button
                size="lg"
                className="rounded-full bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  onClose();
                  onNavigate?.("contact");
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center"
            >
              <X className="text-white" />
            </button>
            
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={project.gallery[currentImageIndex]}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  <ChevronLeft className="text-white" size={28} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  <ChevronRight className="text-white" size={28} />
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
