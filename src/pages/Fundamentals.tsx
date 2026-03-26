import { motion } from 'motion/react';

export default function Fundamentals() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900">
            Salesforce Fundamentals
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p className="mb-6">
              Salesforce provides a comprehensive suite of cloud-based applications focused on sales, customer service, marketing automation, analytics, and application development.
            </p>
            <p className="mb-8">
              By leveraging its powerful ecosystem, organizations can streamline their operations, gain deep insights into customer behavior, and deliver personalized experiences at scale. From its core Sales and Service Clouds to advanced AI capabilities with Agentforce, Salesforce empowers businesses to adapt and thrive in a digital-first world.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl border dark:border-slate-800 border-slate-200"
        >
          <img 
            src="/salesforce-agentic-enterprise-architecture.webp" 
            alt="Salesforce Agentic Enterprise Architecture" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
