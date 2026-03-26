import { motion } from 'motion/react';
import { Code2, Database, Layout, ShieldCheck, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-6 h-6 text-blue-500" />,
    title: 'Salesforce Admin Mastery',
    description: 'Learn data modeling, security, automation and reporting to manage any Salesforce org effectively.'
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    title: 'Apex Development',
    description: 'Write efficient, scalable Apex code. Master triggers, asynchronous processing and testing.'
  },
  {
    icon: <Layout className="w-6 h-6 text-pink-500" />,
    title: 'Lightning Web Components',
    description: 'Build modern, responsive UI components using the latest web standards and LWC framework.'
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Flow & Automation',
    description: 'Automate complex business processes without code using Salesforce Flow Builder.'
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: 'Trailhead Modules & Projects',
    description: 'Build a portfolio of projects to showcase your skills to potential employers.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: 'Certification & Interview Prep',
    description: 'Get ready for certifications and interviews with mock exams and interviews.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 dark:bg-slate-950 bg-white relative border-t dark:border-slate-900 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Everything You Need to Become a <span className="text-blue-500">Salesforce Expert</span>
          </h2>
          <p className="text-lg dark:text-slate-400 text-slate-600">
            Our curriculum is designed to take you from beginner to advanced, covering the most in-demand skills in the Salesforce ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-blue-500 dark:bg-slate-900 bg-blue-50 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col group"
            >
              <div className="w-12 h-12 rounded-lg dark:bg-slate-950 bg-white border dark:border-slate-800 border-blue-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-slate-900 mb-3">{feature.title}</h3>
              <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
