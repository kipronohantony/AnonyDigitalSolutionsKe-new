import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, TrendingUp, Github, Eye } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProjectDetailModal } from "../components/ProjectDetailModal";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metric: string;
  gradient: string;
  span: string;
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
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  useEffect(() => {
    import('../utils/seo').then(m => m.setMeta({
      title: 'Portfolio - Antony Digital Solutions KE | Web Development Eldoret',
      description: 'Portfolio showcasing web, mobile and e-commerce projects built by Antony Kipkosgei Kipronoh. Serving Eldoret and clients across Kenya.',
      image: '/src/assets/c589e228208fb243daf7e6faba1fadad8865abe7.png',
      url: 'https://antonydigitalsolutionske.online/portfolio'
    }));
  }, []);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  const defaultProjects: Project[] = [
    {
      title: "Lumina Petal_Shop",
      category: "E-commerce",
      description: "Modern e-commerce platform with secure payments and real-time tracking",
      image: "src/assets/Lumina Petal shop/Screenshot 2025-10-24 224259.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Lovable"],
      metric: "150%_sales_increase",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-2 lg:row-span-2",
      role: "Full-Stack Developer & UI/UX Designer",
      duration: "2 months",
      objective: "Build a scalable e-commerce solution that increases conversion rates through optimized user experience and seamless payment integration. The platform needed to handle high traffic while maintaining fast loading speeds and secure transactions.",
      features: [
        "Advanced product filtering and search with instant results",
        "Secure payment gateway integration with Stripe",
        "Real-time order tracking with SMS notifications",
        "Admin dashboard with analytics and inventory management",
        "Responsive design optimized for mobile shopping",
        "Abandoned cart recovery system"
      ],
      gallery: [
        "src/assets/Lumina Petal shop/Screenshot 2025-10-24 224253.png",
        "src/assets/Lumina Petal shop/Screenshot 2025-10-24 224246.png", 
        "src/assets/Lumina Petal shop/Screenshot 2025-10-24 224212.png",
        "src/assets/Lumina Petal shop/Screenshot 2025-10-24 224240.png"
      ],
      liveUrl: "https://preview--petal-shop-spark-29.lovable.app",
      githubUrl: "https://github.com/kipronohantony/petal-shop-spark-29.git",
      testimonial: {
        quote: "Antony transformed our online presence completely. Sales increased by 150% in the first quarter, and customer feedback has been overwhelmingly positive. The platform is fast, intuitive, and exactly what we needed.",
        author: "Sarah Johnson",
        position: "CEO, Lumina Petal Shop"
      }
    },
    {
      title: "Annex Delivery_Dash",
      category: "Web app",
      description: "Food delivery app with real-time tracking",
      image: "src/assets/fastfood/screencapture-preview-annex-delivery-dash-lovable-app-2025-10-28-13_17_16.png",
      tags: ["React Native", "Firebase", "Google Maps","javascript",],
      metric: "5K+_downloads",
      gradient: "from-secondary to-primary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "Web App Developer",
      duration: "3 months",
      objective: "Create a user-friendly food delivery web application that connects local restaurants with customers through real-time order tracking and seamless payment integration.",
      features: [
        "Real-time GPS tracking for delivery drivers",
        "Push notifications for order updates",
        "In-app payment with multiple options",
        "Restaurant ratings and reviews system",
        "Favorite orders and quick reorder functionality",
        "Promo codes and loyalty rewards program"
      ],
      gallery: [
        "src/assets/fastfood/fastfood6.png",
        "src/assets/fastfood/fastfood3.png",
        "src/assets/fastfood/fastfood4.png"
      ],
      liveUrl: "https://preview--annex-delivery-dash.lovable.app/",
      testimonial: {
        quote: "The app helped us boost our sales significantly. Customers love the real-time tracking feature, and the seamless payment process has made ordering food easier than ever.",
        author: "Mike",
        position: "Founder, Annex Delivery Dash"
      }
    },
    {
      title: "TechVision_Corporate",
      category: "web",
      description: "Professional website with multilingual support",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjEwMDM5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "i18n", "SEO"],
      metric: "First-page_ranking",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "Web Developer & SEO Specialist",
      duration: "2 months",
      objective: "Develop a corporate website that represents a global tech company with multilingual support and optimized SEO to reach international markets.",
      features: [
        "Multi-language support (English, French, Spanish)",
        "SEO optimized for international markets",
        "Interactive service showcases",
        "Contact forms with CRM integration",
        "Blog with content management system",
        "Fast loading with Next.js optimization"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1610387695018-3a90bf21c575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTExODc3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjEwMDM5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      liveUrl: "https://techvision-demo.com",
      githubUrl: "https://github.com/antony/techvision"
    },
    {
      title: "FitLife_Tracker",
      category: "mobile",
      description: "Fitness app with workout tracking and analytics",
      image: "https://images.unsplash.com/photo-1587133599421-40a3cd84831b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEwMzUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Flutter", "HealthKit", "Charts"],
      metric: "4.8★_rating",
      gradient: "from-secondary to-primary",
      span: "lg:col-span-1 lg:row-span-2",
      role: "Mobile Developer & UX Designer",
      duration: "5 months",
      objective: "Build a comprehensive fitness tracking application that helps users achieve their health goals through data-driven insights and personalized workout plans.",
      features: [
        "Workout tracking with video demonstrations",
        "Progress analytics and visualization",
        "Integration with Apple HealthKit and Google Fit",
        "Personalized workout recommendations",
        "Social features for motivation and challenges",
        "Nutrition tracking and meal planning"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dHxlbnwxfHx8fDE3NjEwMjYzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1587133599421-40a3cd84831b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEwMzUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      liveUrl: "https://fitlife-app.com",
      testimonial: {
        quote: "This app has transformed how I approach fitness. The analytics keep me motivated, and the workout plans are perfectly tailored to my goals. Best fitness app I've used!",
        author: "Emma Wilson",
        position: "Fitness Enthusiast"
      }
    },
    {
      title: "HomeFind_Portal",
      category: "web",
      description: "Real estate platform with virtual tours",
      image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NjA5OTUyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "PostgreSQL", "3D Tours"],
      metric: "1000+_listings",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "Full-Stack Developer",
      duration: "6 months",
      objective: "Create an innovative real estate platform featuring virtual 3D tours, advanced search filters, and seamless agent-client communication tools.",
      features: [
        "360° virtual property tours",
        "Advanced search with map integration",
        "Mortgage calculator and financial tools",
        "Agent dashboard with lead management",
        "Automated property notifications",
        "Document signing and verification"
      ],
      gallery: [
        "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjEwMzkzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NjA5OTUyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      liveUrl: "https://homefind-demo.com"
    },
    {
      title: "LearnHub_Platform",
      category: "web",
      description: "Online learning management system",
      image: "https://images.unsplash.com/photo-1627719172038-611c725920bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjA5MzY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "Video Streaming"],
      metric: "10K+_students",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-2 lg:row-span-1",
      role: "Lead Developer",
      duration: "8 months",
      objective: "Develop a comprehensive learning management system that enables instructors to create and sell courses while providing students with an engaging learning experience.",
      features: [
        "Video streaming with adaptive quality",
        "Interactive quizzes and assignments",
        "Progress tracking and certificates",
        "Live classes with chat functionality",
        "Course marketplace with reviews",
        "Student and instructor dashboards"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2MTA5MDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1627719172038-611c725920bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjA5MzY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      liveUrl: "https://learnhub-demo.com",
      githubUrl: "https://github.com/antony/learnhub"
    },
    {
      title: "GrowthBoost_SEO",
      category: "seo",
      description: "Complete SEO optimization and content strategy",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxMDM1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SEO", "Analytics", "Content Strategy"],
      metric: "500%_traffic_growth",
      gradient: "from-secondary to-primary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "SEO Specialist & Content Strategist",
      duration: "3 months",
      objective: "Implement comprehensive SEO strategies to increase organic traffic and improve search engine rankings for a B2B SaaS company.",
      features: [
        "Technical SEO audit and optimization",
        "Keyword research and content strategy",
        "On-page and off-page SEO implementation",
        "Backlink building campaign",
        "Analytics tracking and reporting",
        "Local SEO optimization"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxMDM1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      testimonial: {
        quote: "Our organic traffic increased by 500% in just three months. Antony's SEO expertise and strategic approach delivered results beyond our expectations.",
        author: "David Martinez",
        position: "Marketing Director, GrowthBoost"
      }
    },
    {
      title: "BrandVision_UI",
      category: "ui",
      description: "Complete UI/UX redesign for mobile banking app",
      image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjEwMjU4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Figma", "UI/UX", "Design System"],
      metric: "95%_user_satisfaction",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "UI/UX Designer",
      duration: "4 months",
      objective: "Redesign the user interface of a mobile banking application to improve user experience, accessibility, and align with modern design trends.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Complete design system creation",
        "Accessibility compliance (WCAG 2.1)",
        "Interactive prototype with micro-interactions",
        "Design handoff and developer collaboration"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjEwMjU4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      testimonial: {
        quote: "The new design is beautiful and intuitive. Our users love the modern interface, and we've seen a significant increase in app engagement.",
        author: "Lisa Anderson",
        position: "Product Manager, BrandVision"
      }
    }
  ];

  // Load projects from localStorage on mount
  useEffect(() => {
    const customProjects = JSON.parse(localStorage.getItem("customProjects") || "[]");
    setAllProjects([...defaultProjects, ...customProjects]);
  }, []);

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const filters = [
    { id: "all", label: "All_Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ui", label: "UI_Design" },
    { id: "seo", label: "SEO" }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-mesh py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
              <img src={logo} alt="Antony Digital" className="mr-2 h-5 w-5" />
              Our_Work
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Success
              <span className="text-gradient block">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects and client transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-12 sticky top-24 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setFilter(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full transition-all ${
                  filter === item.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "glass hover:shadow-md"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${project.span} group`}
                >
                  <Card className="glass rounded-3xl border-0 shadow-xl h-full overflow-hidden cursor-pointer relative">
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/95"></div>
                    </div>
                    
                    {/* Hover Icons Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <motion.button
                        onClick={() => handleProjectClick(project)}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center group/icon"
                      >
                        <Eye className="text-white group-hover/icon:scale-110 transition-transform" size={24} />
                      </motion.button>
                      
                      {project.liveUrl && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50 transition-all flex items-center justify-center group/icon"
                        >
                          <ExternalLink className="text-white group-hover/icon:scale-110 transition-transform" size={24} />
                        </motion.button>
                      )}
                      
                      {project.githubUrl && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent hover:shadow-lg hover:shadow-accent/50 transition-all flex items-center justify-center group/icon"
                        >
                          <Github className="text-white group-hover/icon:scale-110 transition-transform" size={24} />
                        </motion.button>
                      )}
                    </div>
                    
                    <CardContent 
                      className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 pointer-events-none"
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-xs mb-3`}>
                        <TrendingUp size={12} className="mr-1" />
                        {project.metric}
                      </div>
                      
                      <h3 className="text-white mb-2 group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-white/20 backdrop-blur-sm border-0 text-white"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0">
              Impact_Metrics
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              Real <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "250%", label: "Avg_Sales_Increase" },
              { number: "98%", label: "Client_Satisfaction" },
              { number: "4.8★", label: "Average_Rating" },
              { number: "100%", label: "On-Time_Delivery" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card className="glass rounded-3xl border-0 shadow-xl card-hover">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-gradient mb-2">{stat.number}</h2>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's create something amazing together
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="rounded-full bg-white text-primary hover:bg-gray-100 hover:scale-110 transition-all text-lg px-10 py-7"
            >
              Start_Your_Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNavigate={onNavigate}
      />
    </div>
  );
}
