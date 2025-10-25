import { motion } from 'framer-motion';
import { Mail, Instagram, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@petranesic.com',
      link: 'mailto:contact@petranesic.com',
      description: 'Best for project inquiries',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@petragfx',
      link: 'https://instagram.com/petragfx',
      description: 'View my latest work',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-true-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-purple/10 rounded-full blur-[100px] md:blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent-pink/5 rounded-full blur-[80px] md:blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-brand-purple" />
            <span className="text-brand-purple text-sm font-display">Let's Work Together</span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display mb-4 md:mb-6 px-4">
            LET'S CREATE <span className="text-brand-purple">SOMETHING AMAZING</span>
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-pure-white/60 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to elevate your team's visual identity? Get in touch and let's bring your vision to life.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-brand-purple/10 via-deep-charcoal to-deep-charcoal border border-brand-purple/30 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8 md:mb-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-brand-purple/5 rounded-full blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-accent-pink/5 rounded-full blur-2xl md:blur-3xl" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="group bg-true-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-brand-purple/20 hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-200 cursor-pointer relative overflow-hidden"
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>

                    <div className="flex items-start gap-4 md:gap-5 relative z-10">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple group-hover:shadow-lg group-hover:shadow-brand-purple/50 group-hover:scale-110 transition-all duration-200">
                        <Icon className="text-brand-purple group-hover:text-pure-white transition-all duration-200 group-hover:scale-110" size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-display text-pure-white mb-1 md:mb-2 group-hover:text-brand-purple transition-colors duration-200">
                          {method.title}
                        </h3>
                        <p className="text-light-purple text-base md:text-lg mb-1 group-hover:text-pure-white transition-colors duration-200 break-all">
                          {method.value}
                        </p>
                        <p className="text-pure-white/50 text-xs md:text-sm group-hover:text-pure-white/70 transition-colors duration-200">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-brand-purple to-brand-purple/80 p-6 md:p-10 rounded-xl md:rounded-2xl text-center relative overflow-hidden group"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-display text-pure-white mb-3 md:mb-4">
                  READY TO START YOUR PROJECT?
                </h3>
                <p className="text-pure-white/90 text-xs md:text-sm lg:text-base mb-6 md:mb-8 max-w-xl mx-auto px-4">
                  Whether it's a single graphic or a complete visual identity, I'm here to help your team stand out.
                </p>
                <a
                  href="mailto:contact@petranesic.com"
                  className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 bg-pure-white text-brand-purple font-display text-sm md:text-base lg:text-lg rounded-lg md:rounded-xl hover:bg-true-black hover:text-pure-white hover:shadow-2xl hover:shadow-pure-white/20 transition-all duration-200"
                >
                  <Send size={18} className="md:w-[20px] md:h-[20px]" />
                  <span>SEND ME A MESSAGE</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-pure-white/40 text-xs md:text-sm">
            Usually responds within <span className="text-brand-purple font-display">24 hours</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
