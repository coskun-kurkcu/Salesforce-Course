import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need prior coding experience?',
    answer: 'No! All the modules start from scratch. For the Developer track, we teach Apex (which is similar to Java) from the ground up.'
  },
  {
    question: 'How long does it take to complete the course?',
    answer: 'It depends on your pace. Most students complete the Admin track in 4-6 weeks, the Dev track icluding LWC in 3-4 months and the Agentforce traack in 2-3 weeks dedicating 10-15 hours a week.'
  },
  {
    question: 'Can I sign up for specific tracks, modules or topics instead of the entire course?',
    answer: 'Yes, you can sign up for particular areas where you feel you are lacking.'
  },
  {
    question: 'Will I get help if I get stuck?',
    answer: 'Absolutely. All students get continuous live support where instructors and mentors answer questions daily.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 dark:bg-slate-950 bg-white relative border-t dark:border-slate-900 border-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-lg dark:text-slate-400 text-slate-600">
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
              className="border border-blue-500 rounded-3xl dark:bg-slate-900/50 bg-blue-50/50 overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none dark:hover:bg-slate-800/50 hover:bg-blue-100/50 transition-colors"
              >
                <h3 className="text-lg font-medium dark:text-white text-slate-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 dark:text-slate-400 text-slate-600 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t dark:border-slate-800 border-blue-200"
                >
                  <div className="p-6 dark:text-slate-400 text-slate-600 leading-relaxed">
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
