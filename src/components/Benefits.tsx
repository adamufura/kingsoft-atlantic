import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: 100000, suffix: '+', label: 'Transactions', color: 'text-blue-600' },
    { icon: Clock, value: 99.9, suffix: '%', label: 'Uptime', color: 'text-green-600' },
    { icon: Shield, value: 50000, suffix: '+', label: 'Happy Customers', color: 'text-purple-600' },
    { icon: Award, value: 10, suffix: '+', label: 'Years Experience', color: 'text-primary-400' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      const target = stat.value;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }
      }, interval);
    });
  }, [isInView]);

  return (
    <section id="benefits" className="py-20 bg-white">
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
            Trusted by thousands across Nigeria. Licensed, secure, and reliable.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayValue = stat.value >= 1000
              ? (counts[index] / 1000).toFixed(1) + 'K'
              : counts[index].toFixed(stat.value % 1 !== 0 ? 1 : 0);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">
                  {displayValue}{stat.suffix}
                </div>
                <div className="text-secondary-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary-400 mb-4">
                  Licensed & Regulated
                </h3>
                <p className="text-secondary-300 mb-6 leading-relaxed">
                  We are fully licensed by the Central Bank of Nigeria (CBN) as a Bureau de Change operator. 
                  All transactions are conducted in compliance with Nigerian financial regulations, ensuring 
                  your funds are safe and secure.
                </p>
                <ul className="space-y-3 text-secondary-300">
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-400" />
                    <span>Bank-level security encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-400" />
                    <span>CBN Licensed Bureau de Change</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-400" />
                    <span>KYC compliant transactions</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary-200">
                  <div className="text-center">
                    <div className="text-sm text-secondary-300 mb-2">Licensed By</div>
                    <div className="text-2xl font-bold text-primary-400 mb-4">Central Bank of Nigeria</div>
                    <div className="bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold inline-block">
                      CBN Licensed
                    </div>
                  </div>
                </div>
                <p className="text-sm text-secondary-300 mt-4 text-center">
                  License Number: BDC/2024/001234
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Banks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-300 mb-6">Trusted by leading financial institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-xl font-bold text-secondary-300">GTBank</div>
            <div className="text-xl font-bold text-secondary-300">Access Bank</div>
            <div className="text-xl font-bold text-secondary-300">Zenith Bank</div>
            <div className="text-xl font-bold text-secondary-300">UBA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
