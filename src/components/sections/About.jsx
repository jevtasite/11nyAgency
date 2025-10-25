import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '100+', label: 'Campaigns' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10M+', label: 'Total Reach' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-true-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-brand-blue/40 shadow-2xl shadow-brand-blue/20 bg-gradient-to-br from-brand-blue/20 via-deep-charcoal to-true-black flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=600&h=600&fit=crop"
                  alt="Eleveny Agency"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/20 rounded-2xl blur-xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-deep-charcoal p-6 rounded-xl border border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-200 cursor-default relative overflow-hidden group"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-5xl font-display text-brand-blue mb-2 group-hover:text-light-blue transition-colors duration-200">
                      {stat.number}
                    </h3>
                    <p className="text-pure-white/60 text-sm uppercase tracking-wider group-hover:text-pure-white/80 transition-colors duration-200">{stat.label}</p>
                    <div className="w-12 h-1 bg-brand-blue mt-3 rounded-full group-hover:w-20 group-hover:bg-light-blue transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display mb-8 text-center lg:text-left">
              MEET THE <span className="text-brand-blue">AGENCY</span>
            </h2>

            <div className="space-y-5 text-pure-white/70 leading-relaxed text-base md:text-lg">
              <p>
                We don't just post content—we create conversations. Every piece of content is strategically
                crafted to stop the scroll, spark engagement, and build communities that actually care.
              </p>

              <p>
                For over five years, we've partnered with brands who refuse to be invisible. Our data-driven
                approach combined with creative excellence means your social presence doesn't just exist—it
                dominates. We turn followers into fans and fans into customers.
              </p>

              <p>
                Your brand deserves more than templates and generic posts. It deserves a strategy that makes
                people stop, engage, and convert. Let's make your game hit different.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display text-brand-blue">
                  Core Skills
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/30 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                {['Social Media Strategy', 'Content Creation', 'Community Management', 'Brand Development', 'Analytics & Growth'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative px-5 py-3 bg-brand-blue/10 text-pure-white rounded-xl text-base border border-brand-blue/30 hover:bg-brand-blue hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/40 transition-all duration-200 cursor-default overflow-hidden"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <span className="relative z-10 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
