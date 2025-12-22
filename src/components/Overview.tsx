'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HardHat, Code2, Brain } from 'lucide-react';

const valueProps = [
  {
    icon: HardHat,
    title: 'Domain Expertise',
    description:
      'Deep understanding of AEC workflows, pain points, and industry standards from years of hands-on engineering experience',
    gradient: 'from-accent to-accent/70',
    shadowColor: 'shadow-accent/20',
  },
  {
    icon: Code2,
    title: 'Technical Leadership',
    description:
      'Proven track record building and scaling software products that power next-generation construction technology',
    gradient: 'from-primary to-primary-600',
    shadowColor: 'shadow-primary/20',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Practical implementation of AI and automation to augment human capabilities and streamline complex processes',
    gradient: 'from-secondary to-secondary-600',
    shadowColor: 'shadow-secondary/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-background-off">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-width px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-700 rounded-full text-sm font-medium mb-6">
            Why Tatawur AI
          </span>
          <h2 className="text-neutral-dark mb-6">
            Transforming AEC Workflows
          </h2>
          <p className="text-neutral-dark/70 text-lg leading-relaxed">
            Tatawur AI brings together deep domain expertise in structural
            engineering and proven software leadership to help architecture,
            engineering, and construction firms navigate their digital
            transformation journey.
          </p>
        </motion.div>

        {/* Value propositions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl border border-neutral-light/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${prop.gradient} mb-6 ${prop.shadowColor} shadow-lg`}
                >
                  <prop.icon
                    className="w-7 h-7 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                  {prop.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {prop.description}
                </p>

                {/* Hover gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border border-primary/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-dark/80 leading-relaxed">
              With experience scaling software organizations from startup to
              unicorn status and developing production-grade robotic
              construction systems, we understand both the{' '}
              <span className="text-primary font-semibold">
                technical possibilities
              </span>{' '}
              and the{' '}
              <span className="text-secondary font-semibold">
                practical constraints
              </span>{' '}
              of the AEC industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
