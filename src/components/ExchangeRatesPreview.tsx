import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ExchangeRatesPreview = () => {
  const rates = [
    { pair: 'USD/NGN', buy: 1550.50, sell: 1552.75, change: 12.5, trend: 'up' },
    { pair: 'GBP/NGN', buy: 1950.25, sell: 1953.00, change: -8.3, trend: 'down' },
    { pair: 'EUR/NGN', buy: 1680.75, sell: 1683.50, change: 5.2, trend: 'up' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="rates" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
            Exchange Rates
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Transparent rates updated in real-time
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-primary-400 to-primary-500 text-white p-6">
              <div className="grid grid-cols-4 gap-4 font-semibold">
                <div>Currency Pair</div>
                <div className="text-right">Buy Rate</div>
                <div className="text-right">Sell Rate</div>
                <div className="text-right">24h Change</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {rates.map((rate, index) => (
                <motion.div
                  key={index}
                  variants={rowVariants}
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-primary-50 transition-colors"
                >
                  <div className="font-bold text-secondary-400 text-lg">
                    {rate.pair}
                  </div>
                  <div className="text-right text-secondary-400 font-semibold">
                    ₦{rate.buy.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-right text-secondary-400 font-semibold">
                    ₦{rate.sell.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      rate.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {rate.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-semibold">
                        {rate.trend === 'up' ? '+' : ''}{rate.change}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-secondary-300 mt-6"
          >
            Rates are indicative and may vary. Last updated: {new Date().toLocaleString()}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExchangeRatesPreview;
