'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Bot,
  Code2,
  LayoutPanelTop,
  CircuitBoard,
  Factory,
  Cloud,
  Layers,
  Users,
} from 'lucide-react';

const expertise = [
  { icon: Bot, label: 'AI/ML & Computer Vision' },
  { icon: Factory, label: 'Robotics & Autonomous Systems' },
  { icon: Cloud, label: 'Cloud Architecture & DevOps' },
  { icon: Code2, label: 'Full-Stack Development' },
  { icon: LayoutPanelTop, label: 'BIM & Computational Design' },
  { icon: CircuitBoard, label: 'Embedded Systems & IoT' },
  { icon: Layers, label: 'Microservices & Event-Driven' },
  { icon: Users, label: 'Technical Leadership' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-background-off overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div ref={ref} className="container-width px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block text-secondary font-medium text-sm tracking-wide uppercase mb-1">
            About
          </span>
          <h2 className="text-neutral-dark">
            Meet Tarek - Founder of Tatawur AI
          </h2>
        </motion.div>

        {/* Lead paragraph with profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-center gap-8 mb-12"
        >
          <p className="text-xl md:text-2xl text-neutral-dark font-medium leading-relaxed flex-1">
            Tarek is uniquely positioned at the intersection of software, AI,
            and the built environment—with deep technical expertise and a
            proven track record of building novel products in uncharted
            territory.
          </p>
          <div className="flex items-center justify-center flex-shrink-0">
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/tarek-profile.jpeg"
                alt="Tarek - Founder of Tatawur AI"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Two column layout: Bio | Expertise */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio content - wider column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 max-w-[65ch]"
          >
            <p className="text-neutral-dark/80 leading-[1.75]">
              During his tenure as VP of Software Products at ICON, Tarek led a
              team of 30+ engineers developing the software platform behind
              over 200 robotically-built homes—delivering computational
              geometry engines, design automation tools, and real-time
              operations software that scaled construction technology from
              prototype to production.
            </p>

            <p className="text-neutral-dark/80 leading-[1.75]">
              Prior to software leadership, he worked as an engineer at Arup
              and Walter P Moore, building BIM automation tools that reduced
              design iteration time by over 50%. This foundation, combined with
              graduate degrees in AI, computer science, and structural
              engineering, enables him to translate complex technical
              possibilities into practical solutions.
            </p>
          </motion.div>

          {/* Expertise column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-neutral-dark/60 uppercase tracking-wide font-medium mb-4">
              Technical Expertise
            </p>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-light/30 hover:border-secondary/30 transition-colors group"
                >
                  <item.icon
                    size={18}
                    className="text-secondary flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-dark/80 group-hover:text-neutral-dark transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
