'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Cpu, Boxes, Zap, Shield, Lightbulb } from 'lucide-react'

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-off via-white to-secondary/5" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0A2463 1px, transparent 1px),
              linear-gradient(to bottom, #0A2463 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating shapes */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-[15%] text-secondary/30"
        >
          <Building2 size={48} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-[10%] text-primary/20"
        >
          <Cpu size={64} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-[20%] text-accent/25"
        >
          <Boxes size={56} strokeWidth={1} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container-width section-padding pt-32">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary/80">
              AEC Digital Transformation Experts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance mb-6"
          >
            <span className="text-neutral-dark">Evolving Construction </span>
            <br />
            <span className="text-neutral-dark">Through </span>
            <span className="gradient-text">Intelligent Automation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mb-10 leading-relaxed"
          >
            Expert consulting services bridging traditional AEC workflows with 
            cutting-edge software and AI solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => handleScroll('#contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-700 text-white rounded-full font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => handleScroll('#services')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-full font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-neutral-light/50 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {[
              { icon: Zap, label: 'AI & Automation', desc: 'Intelligent workflows' },
              { icon: Shield, label: 'Software Strategy', desc: 'Scalable solutions' },
              { icon: Lightbulb, label: 'Innovation', desc: 'Future-ready tech' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-neutral-dark text-sm">
                    {item.label}
                  </div>
                  <div className="text-xs text-neutral-dark/50">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
