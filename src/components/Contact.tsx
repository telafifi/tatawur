'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';

const projectTypes = [
  'Software Strategy',
  'AI/Automation Implementation',
  'Construction Technology',
  'Technical Leadership',
  'Other',
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Project Type: ${formData.projectType || 'Not specified'}

Message:
${formData.message}
    `.trim();

    // Build subject line
    const subject = formData.projectType
      ? `New Inquiry: ${formData.projectType} - ${formData.name}`
      : `New Inquiry from ${formData.name}`;

    // Create mailto link and open it
    const mailtoLink = `mailto:tarek@tatawur.ai?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-background-off to-primary/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/10 via-transparent to-accent/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0A2463 1px, transparent 0)`,
            backgroundSize: '32px 32px',
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
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-700 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-neutral-dark mb-6">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-neutral-dark/70 text-lg leading-relaxed">
            Reach out to discuss how Tatawur AI can help transform your
            workflows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-light/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-dark mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-neutral-dark mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50 appearance-none cursor-pointer"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-dark mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-background-off/50 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>

                <p className="text-xs text-center text-neutral-dark/50 mt-4">
                  Clicking send will open your email client with the message
                  pre-filled
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact details */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-light/50">
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:tarek@tatawur.ai"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-off/50 hover:bg-secondary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-600 flex items-center justify-center shadow-md">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-dark/60">Email</div>
                    <div className="text-neutral-dark font-medium group-hover:text-secondary transition-colors">
                      tarek@tatawur.ai
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background-off/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-md">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-dark/60">
                      Location
                    </div>
                    <div className="text-neutral-dark font-medium">
                      Tatawur AI LLC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-light/50">
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-6">
                Connect
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/telafifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick response */}
            <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 animate-pulse" />
                <div>
                  <div className="font-medium text-neutral-dark mb-1">
                    Quick Response
                  </div>
                  <div className="text-sm text-neutral-dark/70">
                    We typically respond within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
