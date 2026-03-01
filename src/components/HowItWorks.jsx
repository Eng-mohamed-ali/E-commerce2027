import { motion } from 'framer-motion';
import { staggerContainer, slideUp, cardHover } from './animations/MotionPresets';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Link your favorite shopping platforms and retailers to your ShopAI dashboard in just a few clicks.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Search & Analyze",
      description: "Our AI scans millions of products across the web to find the best deals, reviews, and specs for you.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Save",
      description: "Get real-time alerts on price drops and buy at the lowest price guaranteed. Watch your savings grow.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight"
          >
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Starting your journey with ShopAI is simple and takes less than a minute.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector Line */}
          <div
            className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-200 to-primary-300"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 origin-left"
            />
          </div>

          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={slideUp}
              {...cardHover}
              className="relative text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to save time and money?
          </h3>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join over{' '}
            <span className="font-bold text-primary-600">
              50,000
            </span>{' '}
            smart shoppers who use ShopAI to find the best deals every single day.
          </p>

          <motion.a
            href="/signup"
            aria-label="Get started with ShopAI for free"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all"
          >
            Get Started for Free
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;