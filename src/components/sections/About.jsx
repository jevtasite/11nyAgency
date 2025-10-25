import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '4', label: 'Sports Covered' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-true-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-brand-purple shadow-purple-glow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                  alt="Petra Nešić"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-deep-charcoal p-6 rounded-lg border border-brand-purple/20 hover:border-brand-purple/50 transition-colors"
                >
                  <h3 className="text-4xl font-accent text-brand-purple mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-pure-white/70 text-sm">{stat.label}</p>
                  <div className="w-12 h-1 bg-light-purple mt-2 rounded-full" />
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
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              MEET THE <span className="text-brand-purple">DESIGNER</span>
            </h2>

            <div className="space-y-4 text-pure-white/80 leading-relaxed">
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
            <div className="mt-8">
              <h3 className="text-xl font-display text-brand-purple mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Sports Branding', 'Social Media Graphics'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-brand-purple/20 text-pure-white rounded-md text-sm border border-brand-purple/30 hover:bg-brand-purple/30 transition-colors"
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
