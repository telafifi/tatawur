'use client';

import { motion } from 'framer-motion';
import { Sparkles, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="container-width px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#home');
                }}
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary via-secondary-400 to-accent flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-heading font-bold text-white">
                    Tatawur AI
                  </span>
                  <span className="text-xs text-white/60 tracking-wider">
                    تطور
                  </span>
                </div>
              </a>

              <p className="text-white/70 max-w-md mb-8 leading-relaxed">
                Evolving Construction Through Intelligent Automation. Expert
                consulting services bridging traditional AEC workflows with
                cutting-edge software and AI solutions.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/telafifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary/50 transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(link.href);
                      }}
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-width px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Tatawur AI LLC. All rights
                reserved.
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/20 transition-all"
              >
                <ArrowUp size={16} />
                Back to top
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
