import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  link,
  delay = 0 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {link && (
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
