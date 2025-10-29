import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Trash2, Save, Eye } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner@2.0.3";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

interface AdminProps {
  onNavigate: (page: string) => void;
}

export function Admin({ onNavigate }: AdminProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "web",
    description: "",
    image: "",
    tags: [""],
    metric: "",
    gradient: "from-primary to-secondary",
    span: "lg:col-span-1 lg:row-span-1",
    role: "",
    duration: "",
    objective: "",
    features: [""],
    gallery: [""],
    liveUrl: "",
    githubUrl: "",
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialPosition: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayAdd = (field: "tags" | "features" | "gallery") => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const handleArrayRemove = (field: "tags" | "features" | "gallery", index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleArrayChange = (field: "tags" | "features" | "gallery", index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleSaveProject = () => {
    // Validate required fields
    if (!formData.title || !formData.description || !formData.image) {
      toast.error("Please fill in all required fields (Title, Description, Image)");
      return;
    }

    // Create project object
    const project = {
      title: formData.title,
      category: formData.category,
      description: formData.description,
      image: formData.image,
      tags: formData.tags.filter(tag => tag.trim() !== ""),
      metric: formData.metric,
      gradient: formData.gradient,
      span: formData.span,
      role: formData.role,
      duration: formData.duration,
      objective: formData.objective,
      features: formData.features.filter(feature => feature.trim() !== ""),
      gallery: formData.gallery.filter(img => img.trim() !== ""),
      liveUrl: formData.liveUrl || undefined,
      githubUrl: formData.githubUrl || undefined,
      testimonial: formData.testimonialQuote ? {
        quote: formData.testimonialQuote,
        author: formData.testimonialAuthor,
        position: formData.testimonialPosition
      } : undefined
    };

    // Get existing projects from localStorage
    const existingProjects = JSON.parse(localStorage.getItem("customProjects") || "[]");
    
    // Add new project
    existingProjects.push(project);
    
    // Save to localStorage
    localStorage.setItem("customProjects", JSON.stringify(existingProjects));
    
    toast.success("Project added successfully!");
    
    // Reset form
    setFormData({
      title: "",
      category: "web",
      description: "",
      image: "",
      tags: [""],
      metric: "",
      gradient: "from-primary to-secondary",
      span: "lg:col-span-1 lg:row-span-1",
      role: "",
      duration: "",
      objective: "",
      features: [""],
      gallery: [""],
      liveUrl: "",
      githubUrl: "",
      testimonialQuote: "",
      testimonialAuthor: "",
      testimonialPosition: ""
    });
  };

  const handleViewPortfolio = () => {
    onNavigate("portfolio");
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="gradient-mesh py-20 relative overflow-hidden">
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
              Admin_Panel
            </Badge>
            <h1 className="text-5xl md:text-7xl mb-6">
              Portfolio
              <span className="text-gradient block">Management</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Add new projects to showcase your work
            </p>
            <Button
              onClick={handleViewPortfolio}
              variant="outline"
              className="rounded-full"
            >
              <Eye className="mr-2" size={20} />
              View_Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass rounded-3xl border-0 shadow-2xl">
            <CardHeader className="p-8 border-b border-border">
              <h2 className="text-3xl">
                Add New <span className="text-gradient">Project</span>
              </h2>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-xl text-accent">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="e.g., ShopKE_E-Commerce"
                      className="glass rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="glass rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="ui">UI Design</SelectItem>
                        <SelectItem value="seo">SEO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Brief project description"
                    className="glass rounded-xl min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Main Image URL *</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="glass rounded-xl"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-accent">Tech Stack / Tags</h3>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleArrayAdd("tags")}
                    className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    <Plus size={16} className="mr-1" />
                    Add_Tag
                  </Button>
                </div>
                {formData.tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tag}
                      onChange={(e) => handleArrayChange("tags", index, e.target.value)}
                      placeholder="e.g., React, Node.js"
                      className="glass rounded-xl"
                    />
                    {formData.tags.length > 1 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => handleArrayRemove("tags", index)}
                        className="flex-shrink-0"
                      >
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Metrics & Styling */}
              <div className="space-y-6">
                <h3 className="text-xl text-accent">Metrics & Display</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="metric">Metric</Label>
                    <Input
                      id="metric"
                      value={formData.metric}
                      onChange={(e) => handleInputChange("metric", e.target.value)}
                      placeholder="e.g., 250%_sales_increase"
                      className="glass rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gradient">Gradient</Label>
                    <Select value={formData.gradient} onValueChange={(value) => handleInputChange("gradient", value)}>
                      <SelectTrigger className="glass rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="from-primary to-secondary">Primary to Secondary</SelectItem>
                        <SelectItem value="from-secondary to-primary">Secondary to Primary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="span">Grid Size</Label>
                    <Select value={formData.span} onValueChange={(value) => handleInputChange("span", value)}>
                      <SelectTrigger className="glass rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lg:col-span-1 lg:row-span-1">Small (1x1)</SelectItem>
                        <SelectItem value="lg:col-span-2 lg:row-span-1">Wide (2x1)</SelectItem>
                        <SelectItem value="lg:col-span-1 lg:row-span-2">Tall (1x2)</SelectItem>
                        <SelectItem value="lg:col-span-2 lg:row-span-2">Large (2x2)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-xl text-accent">Project Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      placeholder="e.g., Full-Stack Developer"
                      className="glass rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange("duration", e.target.value)}
                      placeholder="e.g., 4 months"
                      className="glass rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Project Objective</Label>
                  <Textarea
                    id="objective"
                    value={formData.objective}
                    onChange={(e) => handleInputChange("objective", e.target.value)}
                    placeholder="What was the goal of this project?"
                    className="glass rounded-xl min-h-[120px]"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-accent">Key Features</h3>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleArrayAdd("features")}
                    className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    <Plus size={16} className="mr-1" />
                    Add_Feature
                  </Button>
                </div>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) => handleArrayChange("features", index, e.target.value)}
                      placeholder="e.g., Real-time tracking system"
                      className="glass rounded-xl"
                    />
                    {formData.features.length > 1 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => handleArrayRemove("features", index)}
                        className="flex-shrink-0"
                      >
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-accent">Gallery Images</h3>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => handleArrayAdd("gallery")}
                    className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    <Plus size={16} className="mr-1" />
                    Add_Image
                  </Button>
                </div>
                {formData.gallery.map((image, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={image}
                      onChange={(e) => handleArrayChange("gallery", index, e.target.value)}
                      placeholder="Image URL"
                      className="glass rounded-xl"
                    />
                    {formData.gallery.length > 1 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => handleArrayRemove("gallery", index)}
                        className="flex-shrink-0"
                      >
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="space-y-6">
                <h3 className="text-xl text-accent">Project Links</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="liveUrl">Live Demo URL (Optional)</Label>
                    <Input
                      id="liveUrl"
                      value={formData.liveUrl}
                      onChange={(e) => handleInputChange("liveUrl", e.target.value)}
                      placeholder="https://..."
                      className="glass rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="githubUrl">GitHub URL (Optional)</Label>
                    <Input
                      id="githubUrl"
                      value={formData.githubUrl}
                      onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                      placeholder="https://github.com/..."
                      className="glass rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="space-y-6">
                <h3 className="text-xl text-accent">Client Testimonial (Optional)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="testimonialQuote">Quote</Label>
                  <Textarea
                    id="testimonialQuote"
                    value={formData.testimonialQuote}
                    onChange={(e) => handleInputChange("testimonialQuote", e.target.value)}
                    placeholder="What did the client say about your work?"
                    className="glass rounded-xl min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="testimonialAuthor">Client Name</Label>
                    <Input
                      id="testimonialAuthor"
                      value={formData.testimonialAuthor}
                      onChange={(e) => handleInputChange("testimonialAuthor", e.target.value)}
                      placeholder="e.g., Sarah Johnson"
                      className="glass rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="testimonialPosition">Client Position</Label>
                    <Input
                      id="testimonialPosition"
                      value={formData.testimonialPosition}
                      onChange={(e) => handleInputChange("testimonialPosition", e.target.value)}
                      placeholder="e.g., CEO, Company Name"
                      className="glass rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 border-t border-border">
                <Button
                  onClick={handleSaveProject}
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                >
                  <Save className="mr-2" size={20} />
                  Save_Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
