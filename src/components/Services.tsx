'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Bot, Factory, Users, ArrowRight } from 'lucide-react';
import styles from './Services.module.scss';

const services = [
  {
    icon: Layers,
    title: 'Software Strategy & Architecture',
    description:
      'From roadmaps to implementation, we help you build software that scales.',
    features: [
      'Software product strategy and roadmap development',
      'System architecture design for construction technology platforms',
      'Technical due diligence and technology stack evaluation',
      'API and integration architecture planning',
      'Cloud infrastructure and scalability planning',
    ],
    color: 'primary',
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
    color: 'primaryAlt',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={styles.section}>
      {/* Background patterns */}
      <div className={styles.backgroundPattern}>
        <div className={styles.dots} />
      </div>

      <div ref={ref} className={styles.container}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.badge}>What We Offer</span>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.description}>
            Comprehensive consulting solutions tailored to your digital
            transformation needs
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={styles.servicesGrid}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={styles.serviceCard}
            >
              <div className={styles.serviceCardInner}>
                {/* Header */}
                <div className={styles.serviceHeader}>
                  <div
                    className={`${styles.serviceIcon} ${styles[service.color]}`}
                  >
                    <service.icon strokeWidth={1.5} />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <span
                        className={`${styles.featureDot} ${styles[service.color]}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover overlay */}
                <div
                  className={`${styles.serviceOverlay} ${styles[service.color]}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={styles.ctaSection}
        >
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaButton}
          >
            Ready to discuss your project?
            <ArrowRight size={18} className={styles.arrow} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
