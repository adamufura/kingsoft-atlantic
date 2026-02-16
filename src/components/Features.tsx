import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'Best Naira ↔ Forex Rates',
      description: 'Competitive rates with transparent pricing. No hidden fees, no surprises.',
    },
    {
      icon: Zap,
      title: 'Instant Online Transactions',
      description: 'Complete your exchange in minutes. Fast, secure, and hassle-free.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to assist you.',
    },
    {
      icon: Shield,
      title: 'Licensed & Secure',
      description: 'Fully licensed by CBN. Bank-level security for all transactions.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Experience the best currency exchange service in Nigeria
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-secondary-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
