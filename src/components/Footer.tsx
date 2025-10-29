import { Mail, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/c589e228208fb243daf7e6faba1fadad8865abe7.png";

export function Footer() {
  return (
    <footer className="relative bg-accent text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-lg blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary rounded-lg blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Antony Digital Solutions KE" className="h-14 w-auto brightness-0 invert" />
              <h3 className="text-white">Antony_Digital_Solutions_KE</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Your Online Presence Through Innovative Web and Mobile Solutions.
            </p>
             <div className="flex space-x-4">
              {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61566803574278" },
              { Icon: Twitter, href: "https://x.com/Antony_1kip?t=E1pM6mQBL_iuWLEr-yWCag&s=09" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/antony-kipronoh-0015732aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { Icon: Instagram, href: "https://www.instagram.com/antony_digital_solutions_ke?igsh=ZWJ4MmdqOWkwcTM3" },
              ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg glass-dark flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Portfolio"].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors inline-block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <Mail size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm">kipronohantony@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Phone size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm">+254 727 860 767</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Send size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span className="text-sm">@AntonyDigitalSolutionsKE</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            &copy; 2025 Antony Digital Solutions KE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
