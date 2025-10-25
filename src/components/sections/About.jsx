import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '4', label: 'Sports Covered' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-true-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px]"
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
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-brand-purple/40 shadow-2xl shadow-brand-purple/20">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Petra Nešić"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-purple/20 rounded-2xl blur-xl" />
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
                  className="bg-deep-charcoal p-6 rounded-xl border border-brand-purple/20 hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-200 cursor-default relative overflow-hidden group"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-5xl font-display text-brand-purple mb-2 group-hover:text-light-purple transition-colors duration-200">
                      {stat.number}
                    </h3>
                    <p className="text-pure-white/60 text-sm uppercase tracking-wider group-hover:text-pure-white/80 transition-colors duration-200">{stat.label}</p>
                    <div className="w-12 h-1 bg-brand-purple mt-3 rounded-full group-hover:w-20 group-hover:bg-light-purple transition-all duration-300" />
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
            <h2 className="text-4xl md:text-6xl font-display mb-8 text-center lg:text-left">
              MEET THE <span className="text-brand-purple">DESIGNER</span>
            </h2>

            <div className="space-y-5 text-pure-white/70 leading-relaxed text-lg">
              <p>
                Hi! I'm Petra Nešić, a passionate sports graphic designer who specializes
                in creating high-energy visuals that capture the explosive nature of athletics.
              </p>

              <p>
                With years of experience working with football, basketball, and tennis teams,
                I've developed a unique style that combines bold typography, dynamic compositions,
                and vibrant colors to make every graphic feel alive with motion.
              </p>

              <p>
                My goal is to help teams and athletes stand out with graphics that not only
                look amazing but also tell their story and connect with fans on an emotional level.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-2xl font-display text-brand-purple mb-5">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Sports Branding', 'Social Media Graphics'].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-brand-purple/20 text-pure-white rounded-lg text-base border border-brand-purple/30 hover:bg-brand-purple hover:border-brand-purple hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
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
