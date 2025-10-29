import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`floating-nav rounded-full shadow-lg transition-all duration-300 ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <motion.div
              className="cursor-pointer flex items-center gap-3"
              onClick={() => onNavigate("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="Antony Digital Solutions KE" className="h-12 w-auto" />
              <span className="font-semibold text-lg text-accent hidden md:block">
                Antony_Digital_Solutions_KE
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 bg-muted/50 rounded-full px-2 py-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-accent text-primary shadow-lg"
                      : "text-foreground hover:bg-muted"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={() => onNavigate("admin")}
                className="rounded-lg bg-primary text-accent hover:bg-secondary hover:text-white hover:shadow-lg hover:scale-105 transition-all"
              >
                Get_Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-muted/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-border/50 overflow-hidden"
              >
                <div className="px-4 py-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-6 py-3 rounded-lg transition-all ${
                        currentPage === item.id
                          ? "bg-accent text-primary"
                          : "hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <div className="pt-2">
                    <Button
                      className="w-full rounded-lg bg-primary text-accent hover:bg-secondary hover:text-white"
                      onClick={() => {
                        onNavigate("contact");
                        setIsMenuOpen(false);
                      }}
                    >
                      Get_Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
