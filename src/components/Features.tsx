import { motion } from 'motion/react';
import { Code2, Database, Layout, ShieldCheck, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-6 h-6 text-blue-500" />,
    title: 'Salesforce Admin Mastery',
    description: 'Learn data modeling, security, automation, and reporting to manage any Salesforce org effectively.'
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    title: 'Apex Development',
    description: 'Write efficient, scalable Apex code. Master triggers, asynchronous processing, and testing.'
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
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: 'Certification Prep',
    description: 'Get ready for Admin, Platform Developer I, and App Builder certifications with mock exams.'
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: 'Real-World Projects',
    description: 'Build a portfolio of real-world projects to showcase your skills to potential employers.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to become a <span className="text-blue-500">Salesforce Expert</span>
          </h2>
          <p className="text-lg text-slate-400">
            Our curriculum is designed by industry veterans to take you from beginner to advanced, covering the most in-demand skills in the Salesforce ecosystem.
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
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
