import { motion } from "motion/react";
import { useEffect } from "react";
import { Code, Smartphone, TrendingUp, FileText, Check, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  useEffect(() => {
    import('../utils/seo').then(m => m.setMeta({
      title: 'Services - Antony Digital Solutions KE | Web Development Eldoret, Kenya',
      description: 'Web development, mobile apps, SEO, e-commerce and cloud services delivered by Antony Kipkosgei Kipronoh in Eldoret and across Kenya.',
      image: '/src/assets/c589e228208fb243daf7e6faba1fadad8865abe7.png',
      url: 'https://antonydigitalsolutionske.online/services'
    }));
  }, []);
  const services = [
    {
      icon: Code,
      title: "Web_Development",
      tagline: "Digital_Experiences_That_Convert",
      description: "Custom, responsive, and SEO-friendly websites tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjEwMDM5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-primary to-secondary",
      features: [
        "Custom website design",
        "Responsive for all devices",
        "Lightning-fast performance",
        "SEO-optimized structure",
        "E-commerce integration",
        "Modern CMS solutions"
      ],
      benefits: [
        "Professional brand presence",
        "Higher search rankings",
        "Increased conversions",
        "Scalable architecture"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile_App_Development",
      tagline: "Apps_That_Users_Love",
      description: "Cross-platform mobile apps built for performance and exceptional user experience.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwOTg0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-secondary to-primary",
      features: [
        "Native iOS & Android",
        "React Native expertise",
        "Beautiful UI/UX design",
        "Performance optimized",
        "Push notifications",
        "API integration"
      ],
      benefits: [
        "Reach mobile users",
        "Enhanced engagement",
        "Streamlined operations",
        "Competitive advantage"
      ]
    },
    {
      icon: TrendingUp,
      title: "SEO_Optimization",
      tagline: "Dominate_Search_Rankings",
      description: "Strategic SEO solutions to boost visibility and rank higher on search engines.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxMDM1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-primary to-secondary",
      features: [
        "Complete SEO audit",
        "Keyword research",
        "On-page optimization",
        "Technical SEO fixes",
        "Link building strategy",
        "Performance tracking"
      ],
      benefits: [
        "Top search rankings",
        "More organic traffic",
        "Better ROI",
        "Long-term growth"
      ]
    },
    {
      icon: FileText,
      title: "Content_Management",
      tagline: "Manage_With_Ease",
      description: "Efficient CMS solutions to manage and update your content seamlessly.",
      image: "https://images.unsplash.com/photo-1627719172038-611c725920bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwxfHx8fDE3NjA5MzY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-secondary to-primary",
      features: [
        "Custom CMS solutions",
        "WordPress & Webflow",
        "User-friendly interface",
        "Content strategy",
        "Multi-user access",
        "Training included"
      ],
      benefits: [
        "Easy content updates",
        "Reduced costs",
        "Consistent branding",
        "Flexible workflows"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="gradient-mesh py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary text-accent border-0 px-4 py-2 rounded-lg">
              <img src={logo} alt="Antony Digital" className="mr-2 h-5 w-5" />
              Our_Services
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Crafting_Digital_
              <span className="text-gradient block">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your business in the digital world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                    {/* Image Side */}
                    <motion.div
                      className={isEven ? 'lg:order-1' : 'lg:order-2'}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="glass rounded-2xl overflow-hidden shadow-2xl">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                        <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50`}></div>
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className={`inline-flex w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} items-center justify-center mb-6`}>
                        <Icon className="text-accent" size={32} />
                      </div>
                      
                      <h2 className="mb-3">{service.title}</h2>
                      <p className="text-xl text-primary mb-4">{service.tagline}</p>
                      <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>

                      {/* Features */}
                      <Card className="glass rounded-2xl border-0 shadow-xl mb-6">
                        <CardContent className="p-6">
                          <h4 className="mb-4 flex items-center">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} mr-2`}></span>
                            Key_Features
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, fIndex) => (
                              <motion.div
                                key={fIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: fIndex * 0.05 }}
                                className="flex items-center"
                              >
                                <Check className="text-primary mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Benefits */}
                      <Card className="glass rounded-2xl border-0 shadow-xl mb-6">
                        <CardContent className="p-6">
                          <h4 className="mb-4 flex items-center">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} mr-2`}></span>
                            Benefits
                          </h4>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, bIndex) => (
                              <motion.div
                                key={bIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: bIndex * 0.05 }}
                                className="flex items-center"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-3`}></div>
                                <span className="text-sm">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Button
                        onClick={() => onNavigate("contact")}
                        className={`rounded-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:scale-105 transition-all`}
                      >
                        Get Started
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs" },
              { step: "02", title: "Strategy", desc: "Planning the solution" },
              { step: "03", title: "Development", desc: "Building with excellence" },
              { step: "04", title: "Launch", desc: "Going live successfully" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass rounded-3xl border-0 shadow-xl card-hover h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's discuss your project and find the perfect solution
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="rounded-full bg-white text-primary hover:bg-gray-100 hover:scale-110 transition-all text-lg px-10 py-7"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
