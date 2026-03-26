import { motion } from 'motion/react';
import { BookOpen, CheckCircle, ChevronDown, Code, Database, Layout, Bot } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: 'Module 1: Salesforce Fundamentals & Admin',
    icon: <Database className="w-5 h-5 text-blue-500" />,
    lessons: [
      'Introduction to CRM & Salesforce Ecosystem',
      'Data Modeling: Objects, Fields, Relationships',
      'Security Model: Profiles, Roles, Sharing Rules',
      'Data Management: Import/Export, Data Loader',
      'Reports & Dashboards'
    ]
  },
  {
    title: 'Module 2: Automation & Flow Builder',
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    lessons: [
      'Introduction to Automation in Salesforce',
      'Screen Flows & Auto-Launched Flows',
      'Record-Triggered Flows',
      'Approval Processes',
      'Flow Best Practices & Limits'
    ]
  },
  {
    title: 'Module 3: Apex Programming',
    icon: <Code className="w-5 h-5 text-purple-500" />,
    lessons: [
      'Apex Basics: Syntax, Variables, Collections',
      'SOQL & SOSL Queries',
      'Apex Triggers & Order of Execution',
      'Asynchronous Apex',
      'Testing & Code Coverage'
    ]
  },
  {
    title: 'Module 4: Lightning Web Components (LWC)',
    icon: <Layout className="w-5 h-5 text-pink-500" />,
    lessons: [
      'Introduction to LWC',
      'HTML Templates & JavaScript Controllers',
      'Component Communication',
      'Working with Salesforce Data',
      'Styling with SLDS'
    ]
  },
  {
    title: 'Module 5: Agentforce',
    icon: <Bot className="w-5 h-5 text-orange-500" />,
    lessons: [
      'Introduction to Agentforce',
      'Topics, Actions & Prompt Templates',
      'Triggering Flows & Apex from Agents',
      'Creating Custom Agents',
      'Customizing User Interface'
    ]
  }
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-24 dark:bg-slate-950 bg-white relative border-t dark:border-slate-900 border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Comprehensive <span className="text-blue-500">Curriculum</span>
          </h2>
          <p className="text-lg dark:text-slate-400 text-slate-600">
            A step-by-step path to mastering Salesforce, from basic administration to advanced development.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-blue-500 rounded-3xl dark:bg-slate-900 bg-blue-50 overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            >
              <button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none dark:hover:bg-slate-800/50 hover:bg-blue-100/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 dark:bg-slate-950 bg-white rounded-lg border dark:border-slate-800 border-blue-200">
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white text-slate-900">{mod.title}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 dark:text-slate-400 text-slate-600 transition-transform duration-300 ${openModule === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openModule === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t dark:border-slate-800 border-blue-200 dark:bg-slate-950/50 bg-white/50"
                >
                  <ul className="p-6 space-y-4">
                    {mod.lessons.map((lesson, i) => (
                      <li key={i} className="flex items-start gap-3 dark:text-slate-300 text-slate-700">
                        <BookOpen className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
