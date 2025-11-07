import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Send, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kipronohantony@gmail.com",
      link: "mailto:kipronohantony@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 727 860 767",
      // Use WhatsApp quick link for direct chat
      link: "https://wa.me/254727860767",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Send,
      title: "Telegram",
      value: "@AntonyDigitalSolutionsKE",
      link: "https://t.me/AntonyDigitalSolutionsKE",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "24-hour response time",
    "Free consultation",
    "Transparent pricing",
    "Dedicated support"
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Let's Build
              <span className="text-gradient block">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass rounded-3xl border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="mb-2">Send us a message</h3>
                  <p className="text-muted-foreground mb-6">
                    We'll respond within 24 hours
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-2xl glass border-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-2xl glass border-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-2xl glass border-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger className="rounded-2xl glass border-0">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="cms">Content Management</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-2xl glass border-0"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all text-lg py-6"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="glass rounded-3xl border-0 shadow-xl card-hover">
                          <CardContent className="flex items-start p-6">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                              <Icon className="text-white" size={20} />
                            </div>
                            <div>
                              <h4 className="mb-1">{info.title}</h4>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-muted-foreground">{info.value}</p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <Card className="glass rounded-3xl border-0 shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Clock className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="mb-3">Business Hours</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass rounded-3xl border-0 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="mb-4">Why Choose Us?</h4>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={18} />
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Simple websites take 2-4 weeks, while complex applications may take 2-3 months. We provide detailed timelines during consultation."
              },
              {
                q: "What are your payment terms?",
                a: "We typically work with 50% upfront and 50% upon completion. Milestone-based payments available for larger projects."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! We offer various maintenance packages and provide training for basic updates."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass rounded-3xl border-0 shadow-xl card-hover">
                  <CardContent className="p-6">
                    <h4 className="mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
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
              Prefer a Quick Chat?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Reach out directly via WhatsApp or Telegram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/254727860767" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all text-lg px-8 py-6"
                >
                  <Phone className="mr-2" size={20} />
                  WhatsApp Us
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all text-lg px-8 py-6"
              >
                <Send className="mr-2" size={20} />
                Telegram
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
