import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  delay?: number;
}

export function TestimonialCard({ name, company, content, delay = 0 }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <Quote className="text-primary mb-4" size={32} />
          <p className="mb-6 italic text-muted-foreground">{content}</p>
          <div className="flex items-center">
            <Avatar className="mr-3">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
