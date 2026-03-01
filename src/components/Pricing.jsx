import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { staggerContainer, slideUp, cardHover } from './animations/MotionPresets';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for casual shoppers exploring better deals.",
      features: [
        "Basic AI product search",
        "Limited price alerts",
        "Access to 3 retailers",
        "Community support"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Best for smart shoppers who want serious savings.",
      features: [
        "Unlimited AI searches",
        "Unlimited price alerts",
        "All retailer integrations",
        "Priority support",
        "Advanced analytics dashboard"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "For power users and resellers who demand more.",
      features: [
        "Everything in Pro",
        "API access",
        "Bulk price tracking",
        "Custom integrations",
        "Dedicated support manager"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Simple & Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your shopping needs. Upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={slideUp}
              {...cardHover}
              className={`relative p-8 rounded-2xl border shadow-lg ${
                plan.highlighted
                  ? "bg-white border-primary-500 shadow-primary-200"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 ml-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;