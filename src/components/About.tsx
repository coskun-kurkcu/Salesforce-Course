import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Administrator',
    description: 'Salesforce Administrators build and manage trusted solutions on the Salesforce Platform. Admins configure, automate and optimize Salesforce to effectively utilize the CRM system and maximize value. This involves managing and customizing Salesforce to help users get the most out of the platform.',
    features: [
      'Admin Course',
      'Trailhead Modules & Projects',
      'Admin Certification Prep',
      'Interview Prep'
    ]
  },
  {
    name: 'Developer',
    description: 'Developers who work with Salesforce technologies build custom business apps and solutions. While some developers specialize, most fit the description of full-stack developers working with both back-end logic and front-end experiences.',
    features: [
      'Dev Course',
      'Trailhead Modules & Projects',
      'Dev Certification Prep',
      'Interview Prep'
    ]
  },
  {
    name: 'LWC',
    description: 'Use the Lightning Web Components framework to build custom user interfaces, web and mobile apps, and digital experiences on the Salesforce Platform. Lightning web components are custom HTML elements built using HTML and JavaScript.',
    features: [
      'JavaScript & HTML',
      'Modern User Interfaces',
      'Trailhead Modules & Projects',
      'Interview Prep'
    ]
  },
  {
    name: 'Agentforce',
    description: 'Agentforce is the enterprise agentic AI solution that elevates every experience by bringing together humans, applications, AI agents, and data.',
    features: [
      'Agent & Prompt Builder',
      'Modern User Interfaces',
      'Trailhead Modules & Projects',
      'Interview Prep'
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 dark:bg-slate-950 bg-white relative border-t dark:border-slate-900 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            About Our <span className="text-blue-500">Program</span>
          </h2>
          <p className="text-lg dark:text-slate-400 text-slate-600">
            Invest in your career today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-blue-500 dark:bg-slate-900 bg-blue-50 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col"
            >
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-2">{plan.name}</h3>
              <p className="dark:text-slate-400 text-slate-600 mb-8 min-h-[48px]">{plan.description}</p>
              
              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="dark:text-slate-300 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
