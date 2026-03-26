import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden dark:bg-slate-950 bg-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-slate-900 bg-blue-50 border dark:border-slate-800 border-blue-200 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            New Cohort Starting Soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-8 leading-tight"
          >
            Master Salesforce. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Accelerate Your Career.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the elite Salesforce professionals. Learn Admin, Developer, LWC and Agentforce skills from certified experts with projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm dark:text-slate-400 text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>100% Online & Live</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>1-on-1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Personalized Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Continuous Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
