import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your exchange rates?',
      answer: 'Our exchange rates are competitive and updated in real-time. Rates vary based on market conditions and transaction volume. You can view current rates on our rates page or contact our support team for a personalized quote.',
    },
    {
      question: 'How secure are transactions?',
      answer: 'We use bank-level encryption and security protocols to protect all transactions. We are fully licensed by the Central Bank of Nigeria (CBN) and comply with all financial regulations. Your personal and financial information is encrypted and stored securely.',
    },
    {
      question: 'What is the KYC process?',
      answer: 'As a licensed Bureau de Change, we are required to verify customer identity (KYC - Know Your Customer). You\'ll need to provide a valid government-issued ID (National ID, International Passport, or Driver\'s License) and proof of address. The process is quick and can be completed online.',
    },
    {
      question: 'Are there transaction limits?',
      answer: 'Yes, transaction limits apply based on your account verification level. Basic accounts have lower limits, while fully verified accounts can process larger transactions. Contact our support team to learn more about limits and verification requirements.',
    },
    {
      question: 'How long does a transaction take?',
      answer: 'Most transactions are completed within minutes. For smaller amounts, funds are typically available immediately. Larger transactions may take up to 24 hours for processing and verification.',
    },
    {
      question: 'What currencies do you support?',
      answer: 'We support major currencies including USD, GBP, EUR, and NGN. We can also facilitate exchanges for other currencies upon request. Contact us for availability and rates.',
    },
    {
      question: 'Do you charge any fees?',
      answer: 'Our rates are transparent with no hidden fees. The exchange rate includes our service fee, so you\'ll know exactly how much you\'ll receive before confirming the transaction.',
    },
    {
      question: 'Is my money safe?',
      answer: 'Yes, absolutely. We are licensed by the Central Bank of Nigeria and follow strict regulatory guidelines. All funds are held in secure accounts with partner banks, and we maintain comprehensive insurance coverage.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-between"
              >
                <span className="font-semibold text-secondary-400 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-primary-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-primary-50 rounded-b-xl p-6 border-x border-b border-gray-100">
                      <p className="text-secondary-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
