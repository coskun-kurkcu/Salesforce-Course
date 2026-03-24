import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need prior coding experience?',
    answer: 'No! The Admin module starts from scratch. If you decide to take the Developer track, we teach Apex (which is similar to Java) from the ground up.'
  },
  {
    question: 'How long does it take to complete the course?',
    answer: 'It depends on your pace. Most students complete the Admin track in 4-6 weeks and the Full Stack track in 3-4 months dedicating 10-15 hours a week.'
  },
  {
    question: 'Do you provide a certificate of completion?',
    answer: 'Yes, you will receive a verifiable certificate of completion. More importantly, our curriculum is designed to help you pass the official Salesforce certifications.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 14-day money-back guarantee. If you are not satisfied with the course content within the first two weeks, we will issue a full refund.'
  },
  {
    question: 'Will I get help if I get stuck?',
    answer: 'Absolutely. All students get access to our private community forum where instructors and peers answer questions daily. Mentorship students get additional 1-on-1 support.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about the course and how it works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-slate-800"
                >
                  <div className="p-6 text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
