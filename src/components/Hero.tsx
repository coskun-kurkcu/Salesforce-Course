import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            New Cohort Starting Soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight"
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
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the elite 1% of Salesforce professionals. Learn Admin, Developer, and LWC skills from certified experts with real-world projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group">
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
              View Syllabus
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>100% Online & Self-Paced</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="ml-2">4.9/5 from 2,000+ students</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-2 shadow-2xl overflow-hidden">
            <div className="rounded-xl border border-slate-800/50 bg-slate-950 overflow-hidden relative aspect-[16/9] flex items-center justify-center">
              {/* Abstract code/dashboard representation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
              
              <div className="w-full h-full p-8 flex flex-col gap-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                <div className="flex gap-6 h-full">
                  <div className="w-1/4 flex flex-col gap-4">
                    <div className="h-8 w-3/4 bg-slate-800 rounded-md animate-pulse"></div>
                    <div className="h-4 w-full bg-slate-800/50 rounded-md"></div>
                    <div className="h-4 w-5/6 bg-slate-800/50 rounded-md"></div>
                    <div className="h-4 w-4/5 bg-slate-800/50 rounded-md"></div>
                    <div className="mt-auto h-32 w-full bg-blue-900/20 border border-blue-500/20 rounded-lg"></div>
                  </div>
                  <div className="w-3/4 flex flex-col gap-4">
                    <div className="h-12 w-full bg-slate-800/80 rounded-lg"></div>
                    <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <div className="flex flex-col gap-3">
                        <div className="h-5 w-1/3 bg-blue-500/20 rounded"></div>
                        <div className="h-4 w-full bg-slate-800 rounded"></div>
                        <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
                        <div className="h-4 w-4/6 bg-slate-800 rounded"></div>
                        <div className="h-4 w-full bg-slate-800 rounded mt-4"></div>
                        <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
