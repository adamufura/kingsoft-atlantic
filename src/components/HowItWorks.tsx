import { motion } from 'framer-motion';
import { Calculator, Globe, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calculator,
      title: 'Input Amount',
      description: 'Enter how much you want to exchange',
      number: '01',
    },
    {
      icon: Globe,
      title: 'Choose Currency',
      description: 'Select your source and destination currency',
      number: '02',
    },
    {
      icon: CheckCircle,
      title: 'Receive at Best Rate',
      description: 'Get your funds at the best available rate',
      number: '03',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Exchange currency in three simple steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <Icon className="w-10 h-10 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-400 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-300">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
