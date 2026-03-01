import { Link } from 'react-router-dom';
import { ArrowRight, Play, ShoppingBag, Smartphone, Laptop, Watch } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  staggerContainer, 
  slideUp, 
  slideInRight, 
  buttonHover, 
  iconHover,
  floatAnimation 
} from './animations/MotionPresets';

const Hero = () => {
  const storeIcons = [
    { Icon: ShoppingBag, name: "Amazon" },
    { Icon: Smartphone, name: "Best Buy" },
    { Icon: Laptop, name: "Walmart" },
    { Icon: Watch, name: "Target" },
  ];

  const products = [
    { name: 'Sony WH-1000XM4', rating: 4.8, price: 278, original: 398, discount: 120 },
    { name: 'Bose 700', rating: 4.6, price: 329, original: 379, discount: 50 },
    { name: 'Apple AirPods Max', rating: 4.7, price: 479, original: 549, discount: 70 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div 
          {...floatAnimation}
          className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply blur-3xl opacity-20"
        />
        <motion.div 
          {...floatAnimation}
          transition={{ delay: 2, duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <motion.h1 
              id="hero-heading"
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
            >
              Find the Best Products,{' '}
              <span className="gradient-text">
                Faster with AI.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={slideUp}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Our AI engine scans thousands of retailers in seconds to find the best deals,
              comprehensive reviews, and technical specs tailored specifically to your needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={slideUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div {...buttonHover}>
                <Link
                  to="/signup"
                  aria-label="Get started with MarketMosaic for free"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all"
                >
                  <span className="flex items-center">
                    Get Started for Free
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div {...buttonHover}>
                <Link
                  to="/demo"
                  aria-label="Watch product demo"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Store Icons */}
            <motion.div variants={slideUp}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Works seamlessly with your favorite stores
              </p>
              <div className="store-icons-grid flex justify-center lg:justify-start gap-6 text-gray-500">
                {storeIcons.map(({ Icon, name }) => (
                  <motion.div
                    key={name}
                    {...iconHover}
                    title={name}
                    aria-label={name}
                  >
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            variants={slideInRight}
            className="relative hidden lg:block"
          >
            <motion.div
              {...floatAnimation}
              className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs font-medium text-gray-400 ml-auto">
                  AI Analysis
                </span>
              </div>
              
              <div className="space-y-4">
                {products.map((product, index) => (
                  <motion.article
                    key={product.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`p-4 rounded-xl transition-all ${
                      index === 0 
                        ? 'bg-primary-50 border-2 border-primary-200' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {product.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-400" aria-hidden="true">★</span>
                          <span className="text-sm text-gray-600 ml-1">
                            {product.rating}
                          </span>
                          <span className="sr-only">
                            {product.rating} out of 5 stars
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary-600">
                          <span className="sr-only">Current price </span>
                          ${product.price}
                        </p>
                        <p className="text-xs text-gray-400 line-through">
                          ${product.original}
                        </p>
                        {index === 0 && (
                          <p className="text-xs text-green-600 font-medium">
                            Save ${product.discount}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Price trend this week:</span>
                  <span className="text-green-600 font-medium">↓ 15%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;