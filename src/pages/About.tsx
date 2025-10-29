import { motion } from "motion/react";
import { Target, Eye, Award, Users, Lightbulb, Shield, Heart, CheckCircle, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technologies and creative solutions",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality and on-time delivery",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Open communication and honest partnerships",
      gradient: "from-primary to-secondary"
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "Your success is our ultimate goal",
      gradient: "from-secondary to-primary"
    }
  ];

  const milestones = [
    { icon: Zap, number: "50+", label: "Projects", gradient: "from-primary to-secondary" },
    { icon: Users, number: "40+", label: "Clients", gradient: "from-secondary to-primary" },
    { icon: TrendingUp, number: "5+", label: "Years", gradient: "from-primary to-secondary" },
    { icon: Award, number: "98%", label: "Satisfaction", gradient: "from-secondary to-primary" }
  ];

  const expertise = [
    "Frontend Development",
    "Backend Architecture",
    "Mobile Development",
    "SEO & Marketing",
    "UI/UX Design",
    "CMS Solutions",
    "E-commerce",
    "Cloud Services"
  ];

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
              About Us
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Building Digital
              <span className="text-gradient block">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in digital transformation since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Our Story
              </Badge>
              <h2 className="mb-6">Transforming Ideas Into Digital Reality</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded with a vision to democratize digital excellence, Antony Digital Solutions KE 
                has grown from a passion project into Kenya's trusted digital partner.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                We've helped over 40 businesses across diverse industries achieve their digital goals, 
                from startups finding their first customers to enterprises scaling their operations.
              </p>
              <p className="text-muted-foreground text-lg">
                Every line of code we write, every design we create, and every strategy we develop 
                is driven by one goal: your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-3xl overflow-hidden shadow-xl"
                  style={{ gridRow: 'span 2' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYwOTQ4MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-3xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10"
                >
                  <Target className="text-primary mb-2" size={32} />
                  <h4>Our Mission</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-3xl p-6 bg-gradient-to-br from-secondary/10 to-primary/10"
                >
                  <Eye className="text-secondary mb-2" size={32} />
                  <h4>Our Vision</h4>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-secondary/10 text-secondary border-0">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass rounded-3xl border-0 shadow-xl h-full">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Leadership
              </Badge>
              <h2 className="mb-4">Meet Antony</h2>
              <p className="text-xl text-primary mb-4">Founder & Lead Developer</p>
              <p className="text-muted-foreground mb-6 text-lg">
                With 5+ years of experience in full-stack development and digital strategy, 
                Antony has led the transformation of over 50 businesses through innovative 
                digital solutions.
              </p>
              
              <Card className="glass rounded-3xl border-0 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="mb-4">Technical Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-2"></div>
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://i.postimg.cc/13nQyWjN/IMG-20251023-WA0137.jpg"
                    alt="Antony"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-gray-900 to-accent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-dark rounded-3xl border-0 shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h2 className="text-white mb-2">{milestone.number}</h2>
                      <p className="text-gray-300">{milestone.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
