import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Mock data for the chart - in production, this would come from an API
const generateMockData = () => {
  const data = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const date = new Date(now);
    date.setHours(date.getHours() - i);
    const baseRate = 1500 + Math.random() * 100;
    data.push({
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      rate: Math.round(baseRate * 100) / 100,
    });
  }
  return data;
};

const ExchangeRatesChart = () => {
  const [chartData, setChartData] = useState(generateMockData());
  const [currentRate, setCurrentRate] = useState(1550.75);
  const [change, setChange] = useState(12.5);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      const newData = generateMockData();
      setChartData(newData);
      const latestRate = newData[newData.length - 1].rate;
      setCurrentRate(latestRate);
      setChange((latestRate - 1500) / 10);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const isPositive = change >= 0;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
              Live Naira Exchange Rate
            </h2>
            <p className="text-lg text-secondary-300">
              Real-time USD/NGN rate tracking
            </p>
          </div>

          {/* Current Rate Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl p-8 mb-8 text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <p className="text-primary-100 text-sm mb-2">Current Rate</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold">
                    ₦{currentRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h3>
                  <span className="text-lg">USD/NGN</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className={`flex items-center gap-2 ${isPositive ? 'text-green-200' : 'text-red-200'}`}>
                  {isPositive ? (
                    <TrendingUp className="w-6 h-6" />
                  ) : (
                    <TrendingDown className="w-6 h-6" />
                  )}
                  <span className="text-xl font-semibold">
                    {isPositive ? '+' : ''}{change.toFixed(2)}%
                  </span>
                </div>
                <p className="text-primary-100 text-sm mt-1">24h change</p>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="time"
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  domain={['dataMin - 10', 'dataMax + 10']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number | undefined) => {
                    if (value === undefined) return '';
                    return [`₦${value.toLocaleString()}`, 'Rate'];
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#D4AF37"
                  strokeWidth={3}
                  dot={{ fill: '#D4AF37', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-secondary-300 mt-4"
          >
            Rates are updated every 30 seconds. Last updated: {new Date().toLocaleTimeString()}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExchangeRatesChart;
