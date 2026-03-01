import { Zap, Target, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp, cardHover, iconHover } from './animations/MotionPresets';

const Features = () => {
  const features = [
    { 
      icon: Zap, 
      title: "Smart Comparison", 
      desc: "Get side-by-side specs and a comprehensive price history from across the entire web. Never overpay again.",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Target, 
      title: "Personalized Recs", 
      desc: "AI-driven suggestions based on your unique preferences, style, and past search behavior for a truly custom experience.",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Bell, 
      title: "Real-time Alerts", 
      desc: "Instant notifications delivered to your device the moment a price drop occurs on an item you've been watching.",
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            Experience{' '}
            <span className="gradient-text">Smarter Shopping</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Unlock the power of artificial intelligence to transform how you
            find and buy products online with tools designed for modern shoppers.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={slideUp}
              {...cardHover}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300"
            >
              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div 
                {...iconHover}
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                aria-hidden="true"
              >
                <feature.icon size={28} />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;