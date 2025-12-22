'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Layers, 
  Bot, 
  Factory, 
  Users,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Software Strategy & Architecture',
    description: 'From roadmaps to implementation, we help you build software that scales.',
    features: [
      'Software product strategy and roadmap development',
      'System architecture design for construction technology platforms',
      'Technical due diligence and technology stack evaluation',
      'API and integration architecture planning',
      'Cloud infrastructure and scalability planning',
    ],
    color: 'primary',
    gradient: 'from-primary to-primary-600',
  },
  {
    icon: Bot,
    title: 'AI & Automation Implementation',
    description: 'Practical AI solutions that deliver measurable results.',
    features: [
      'Workflow analysis and automation opportunity identification',
      'Computer vision systems for construction monitoring and QA',
      'Predictive analytics and data-driven insights',
      'Natural language processing for document analysis',
      'Custom AI model development and integration',
    ],
    color: 'secondary',
    gradient: 'from-secondary to-secondary-600',
  },
  {
    icon: Factory,
    title: 'Construction Technology Solutions',
    description: 'Building the software that builds the future.',
    features: [
      'Robotic construction system software development',
      'BIM integration and computational design workflows',
      'IoT and sensor integration for smart construction',
      'Digital twin development and implementation',
      'Construction automation platforms',
    ],
    color: 'accent',
    gradient: 'from-accent to-accent-600',
  },
  {
    icon: Users,
    title: 'Technical Leadership & Team Building',
    description: 'Scaling engineering organizations for success.',
    features: [
      'Engineering team structure and scaling strategies',
      'Technical hiring and talent development',
      'Engineering culture and best practices implementation',
      'Cross-functional collaboration frameworks',
      'Agile/Scrum process optimization for construction tech',
    ],
    color: 'primary',
    gradient: 'from-primary-700 to-primary',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleScroll = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-background-off to-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0A2463 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div ref={ref} className="container-width px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            What We Offer
          </span>
          <h2 className="text-neutral-dark mb-6">
            Services
          </h2>
          <p className="text-neutral-dark/70 text-lg leading-relaxed">
            Comprehensive consulting solutions tailored to your digital transformation needs
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full p-8 bg-white rounded-3xl border border-neutral-light/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-dark/60">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-neutral-dark/70">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mt-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-700 text-white rounded-full font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
          >
            Ready to discuss your project?
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

