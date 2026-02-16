import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-400 mb-6 leading-tight"
          >
            Fast, Secure & Transparent
            <br />
            <span className="text-primary-400">Currency Exchange</span>
            <br />
            in Nigeria
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto"
          >
            Get the best Naira ↔ Forex rates with instant online transactions.
            Licensed, secure, and trusted by thousands.
          </motion.p>

          {/* Currency Converter UI Hint */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-secondary-300 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-400 focus:outline-none text-lg"
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-secondary-300 mb-2">
                  From
                </label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-400 focus:outline-none text-lg"
                >
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="NGN">NGN</option>
                </select>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  className="p-2 bg-primary-100 rounded-full"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <ArrowRight className="w-6 h-6 text-primary-400" />
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-secondary-300 mb-2">
                  To
                </label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-400 focus:outline-none text-lg"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="bg-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#rates"
              className="bg-white text-primary-400 border-2 border-primary-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-5 h-5" />
              View Rates
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
