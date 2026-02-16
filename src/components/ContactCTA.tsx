import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-400 to-primary-500 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Exchange Currency?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100">
            Get started today and experience the best exchange rates in Nigeria
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#"
              className="bg-white text-primary-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Exchanging
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Request a Quote
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-300"
          >
            <a
              href="mailto:info@kingsoftatlantic.com"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>info@kingsoftatlantic.com</span>
            </a>
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span>+234 800 000 0000</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
