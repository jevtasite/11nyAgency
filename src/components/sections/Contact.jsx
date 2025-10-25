import { motion } from 'framer-motion';
import { Mail, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4">
            GET IN <span className="text-brand-purple">TOUCH</span>
          </h2>
          <p className="text-lg text-pure-white/70 max-w-2xl mx-auto">
            Ready to elevate your team's visual identity? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-true-black p-8 rounded-lg border border-brand-purple/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-pure-white mb-2">Email</h3>
                  <a
                    href="mailto:contact@petranesic.com"
                    className="text-light-purple hover:underline"
                  >
                    contact@petranesic.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-true-black p-8 rounded-lg border border-brand-purple/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-pure-white mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/petragfx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-purple hover:underline"
                  >
                    @petragfx
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-true-black p-8 rounded-lg border border-brand-purple/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-pure-white mb-2">Response Time</h3>
                  <p className="text-pure-white/70">Usually responds within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-gradient p-12 rounded-lg flex flex-col justify-center items-center text-center h-full"
          >
            <h3 className="text-3xl md:text-4xl font-display text-pure-white mb-4">
              READY TO ELEVATE YOUR TEAM'S VISUAL IDENTITY?
            </h3>
            <p className="text-lg text-pure-white/90 mb-8">
              Let's create graphics that make your team stand out
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@petranesic.com"
                className="px-8 py-4 bg-light-purple text-true-black font-display rounded-md hover:shadow-mint-glow transition-all duration-300 hover:scale-105"
              >
                START A PROJECT
              </a>
              <a
                href="https://instagram.com/petragfx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-pure-white text-pure-white font-display rounded-md hover:bg-pure-white/10 transition-all duration-300"
              >
                VIEW INSTAGRAM
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
