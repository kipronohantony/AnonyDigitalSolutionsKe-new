import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Code, Smartphone, TrendingUp, FileText, Zap, Award, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Code,
      title: "Web_Development",
      description: "Stunning, responsive websites",
      gradient: "from-primary to-secondary",
      delay: 0
    },
    {
      icon: Smartphone,
      title: "Mobile_Apps",
      description: "Native & cross-platform",
      gradient: "from-secondary to-primary",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "SEO_Optimization",
      description: "Rank higher, grow faster",
      gradient: "from-primary to-secondary",
      delay: 0.2
    },
    {
      icon: FileText,
      title: "Content_Management",
      description: "Easy, powerful CMS",
      gradient: "from-secondary to-primary",
      delay: 0.3
    }
  ];

  const stats = [
    { number: "50+", label: "Projects", icon: Zap },
    { number: "40+", label: "Clients", icon: Users },
    { number: "98%", label: "Satisfaction", icon: Award },
    { number: "5+", label: "Years", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Kenya",
      content: "Transformed our digital presence completely!",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      role: "Founder, Retail Plus",
      content: "300% increase in customer engagement!",
      rating: 5
    },
    {
      name: "Grace Wanjiru",
      role: "Director, GreenLeaf",
      content: "SEO rankings improved dramatically.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Gradient Mesh */}
      <section className="relative min-h-screen gradient-mesh flex items-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-lg blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-lg blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ y, opacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-6 bg-primary text-accent border-0 px-4 py-2 rounded-lg">
                  <img src={logo} alt="Antony Digital" className="mr-2 h-5 w-5" />
                  Digital_Excellence
                </Badge>
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block">Empowering_</span>
                <span className="text-gradient block">Digital_Dreams</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transform your business with innovative web & mobile solutions. 
                We craft digital experiences that drive growth.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className="rounded-lg bg-primary text-accent hover:bg-secondary hover:text-white hover:shadow-2xl hover:scale-105 transition-all text-lg px-8 py-6"
                >
                  Start_Your_Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("portfolio")}
                  className="rounded-lg border-2 border-accent hover:bg-accent hover:text-primary text-lg px-8 py-6"
                >
                  View_Our_Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Bento Grid Hero Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="glass rounded-2xl overflow-hidden shadow-2xl card-hover"
                  style={{ gridRow: 'span 2' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1587133599421-40a3cd84831b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEwMzUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital workspace"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="glass rounded-2xl p-6 shadow-xl card-hover bg-gradient-to-br from-primary/10 to-secondary/10"
                >
                  <Award className="text-primary mb-3" size={32} />
                  <h3 className="mb-2">Award_Winning</h3>
                  <p className="text-sm text-muted-foreground">Excellence in design</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="glass rounded-2xl p-6 shadow-xl card-hover bg-gradient-to-br from-secondary/10 to-primary/10"
                >
                  <Users className="text-secondary mb-3" size={32} />
                  <h3 className="mb-2">50+_Clients</h3>
                  <p className="text-sm text-muted-foreground">Trusted partnerships</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-accent border-0 rounded-lg">
              Our_Services
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              What_We <span className="text-gradient">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: service.delay }}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl p-8 shadow-xl card-hover cursor-pointer group"
                  onClick={() => onNavigate("services")}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="mb-3 group-hover:text-gradient transition-all">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-primary">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-lg blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-lg blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Proven_ <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="glass-dark rounded-2xl p-8 card-hover">
                    <Icon className="text-primary mx-auto mb-4" size={40} />
                    <h2 className="text-white mb-2">{stat.number}</h2>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-secondary/10 text-secondary border-0 rounded-lg">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              Client_ <span className="text-gradient">Success</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass rounded-2xl border-0 shadow-xl card-hover h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-lg blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-lg blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready_to_Transform_Your_Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's create something amazing together
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="rounded-lg bg-primary text-accent hover:bg-secondary hover:text-white hover:scale-110 transition-all text-lg px-10 py-7 shadow-2xl"
            >
              Start_Your_Journey
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
