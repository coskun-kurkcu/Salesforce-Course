import { motion } from 'motion/react';
import { Cloud, Users, TrendingUp, ArrowRight } from 'lucide-react';

interface SalesforceProps {
  setCurrentPage?: (page: string) => void;
}

export default function Salesforce({ setCurrentPage }: SalesforceProps) {
  return (
    <section id="salesforce" className="py-24 dark:bg-slate-900 bg-blue-50 relative border-t dark:border-slate-800 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
              What is <span className="text-blue-500">Salesforce?</span>
            </h2>
            <p className="text-lg dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">
              Salesforce is the world's #1 Customer Relationship Management (CRM) platform. It helps businesses grow by connecting them with their customers in a whole new way, uniting sales, service, marketing and commerce teams on a single platform.
            </p>
            <p className="text-lg dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
              As a cloud-based software, it provides powerful tools for automation, analytics and AI-driven insights, making it an essential skill for modern tech professionals.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark:text-white text-slate-900">100% Cloud-Based</h4>
                  <p className="dark:text-slate-400 text-slate-600">Access from anywhere, anytime.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark:text-white text-slate-900">Customer 360</h4>
                  <p className="dark:text-slate-400 text-slate-600">A unified view of every customer.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark:text-white text-slate-900">Scalable Growth</h4>
                  <p className="dark:text-slate-400 text-slate-600">Built for businesses of all sizes.</p>
                </div>
              </div>
            </div>

            {setCurrentPage && (
              <button
                onClick={() => {
                  setCurrentPage('fundamentals');
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                Fundamentals <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>

          {/* Image Collage Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl shadow-lg w-full h-48 bg-white border dark:border-slate-700 border-blue-200 overflow-hidden">
                <img
                  src="/Salesforce Wall Logo.jpg"
                  alt="Salesforce Logo"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <img
                src="/CRM.jpg"
                alt="Team Collaboration"
                className="rounded-2xl shadow-lg w-full h-64 object-cover border dark:border-slate-700 border-blue-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl shadow-lg w-full h-64 bg-white border dark:border-slate-700 border-blue-200 overflow-hidden">
                <img
                  src="/Salesforce Services.png"
                  alt="Salesforce Services"
                  className="w-full h-full object-cover scale-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <img
                src="/Agentforce.webp"
                alt="Cloud Technology"
                className="rounded-2xl shadow-lg w-full h-48 object-cover border dark:border-slate-700 border-blue-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
