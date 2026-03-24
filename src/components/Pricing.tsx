import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Admin Fundamentals',
    price: '$299',
    description: 'Perfect for beginners looking to start their Salesforce journey.',
    features: [
      'Full Admin Course Access',
      '5 Real-World Projects',
      'Admin Certification Prep',
      'Community Forum Access'
    ],
    notIncluded: [
      'Developer & LWC Modules',
      '1-on-1 Mentorship',
      'Resume Review'
    ],
    buttonText: 'Start Admin Course',
    highlight: false
  },
  {
    name: 'Full Stack Masterclass',
    price: '$799',
    description: 'The complete package. Admin, Developer, and LWC mastery.',
    features: [
      'Everything in Admin Fundamentals',
      'Apex & LWC Development Modules',
      '15+ Advanced Projects',
      'PD1 & App Builder Cert Prep',
      'Resume & Interview Prep',
      'Priority Support'
    ],
    notIncluded: [
      '1-on-1 Mentorship'
    ],
    buttonText: 'Get Full Access',
    highlight: true
  },
  {
    name: 'Mentorship Elite',
    price: '$1,499',
    description: 'Accelerate your learning with personalized guidance.',
    features: [
      'Everything in Full Stack Masterclass',
      'Weekly 1-on-1 Mentorship Calls',
      'Personalized Learning Path',
      'Mock Interviews with Experts',
      'Job Placement Assistance'
    ],
    notIncluded: [],
    buttonText: 'Apply for Mentorship',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent <span className="text-blue-500">pricing</span>
          </h2>
          <p className="text-lg text-slate-400">
            Invest in your career today. No hidden fees, lifetime access to course materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${plan.highlight ? 'border-blue-500 bg-slate-900 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative' : 'border-slate-800 bg-slate-900/50'} flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6 min-h-[48px]">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400">/one-time</span>
              </div>
              
              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all mb-8 ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {plan.buttonText}
              </button>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50">
                    <X className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-slate-400 line-through">{feature}</span>
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
