import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Ogunleye',
      role: 'Business Owner',
      content: 'Fast, reliable, and transparent rates. I\'ve been using their services for over a year and never had any issues. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Chioma Nwosu',
      role: 'Freelancer',
      content: 'The best exchange rates I\'ve found in Nigeria. Transactions are completed within minutes. Excellent customer service too!',
      rating: 5,
    },
    {
      name: 'Emeka Okoro',
      role: 'Entrepreneur',
      content: 'As someone who exchanges currency frequently, I appreciate their transparency and competitive rates. The CBN license gives me confidence.',
      rating: 5,
    },
    {
      name: 'Fatima Ibrahim',
      role: 'Student',
      content: 'Quick and easy process. I needed to exchange money for my tuition fees and got a great rate. Will definitely use again!',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-400 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Nigeria
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <Quote className="w-12 h-12 text-primary-400 mb-6" />
              <p className="text-lg md:text-xl text-secondary-300 mb-6 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-secondary-400 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-secondary-300 text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-primary-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-secondary-400" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-400 w-8'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-secondary-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
