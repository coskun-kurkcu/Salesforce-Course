import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/d2bbeb7f4d3b0915922c3d30a80a35fd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 dark:bg-slate-950 bg-white relative border-t dark:border-slate-900 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-lg dark:text-slate-400 text-slate-600">
            Have questions about our programs? We're here to help you start your Salesforce journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 rounded-3xl border border-blue-500 dark:bg-slate-900 bg-blue-50 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Contact Information</h3>
            <p className="dark:text-slate-400 text-slate-600 mb-8">
              Reach out to us directly via email or fill out the form, and our team will get back to you as soon as possible.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full dark:bg-slate-800 bg-blue-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm dark:text-slate-400 text-slate-500 font-medium">Contact Email</p>
                <a href="mailto:teachskills.net@gmail.com" className="text-lg font-semibold dark:text-white text-slate-900 hover:text-blue-500 transition-colors">
                  teachskills.online@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-blue-500 dark:bg-slate-900 bg-blue-50 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium dark:text-slate-300 text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-white border dark:border-slate-800 border-blue-200 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium dark:text-slate-300 text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-white border dark:border-slate-800 border-blue-200 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium dark:text-slate-300 text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-white border dark:border-slate-800 border-blue-200 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium dark:text-slate-300 text-slate-700">Comment</label>
                <textarea 
                  id="comment" 
                  name="comment"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-white border dark:border-slate-800 border-blue-200 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-600 dark:text-green-400"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
