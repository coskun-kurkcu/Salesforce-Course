import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Salesforce Administrator',
    company: 'TechCorp',
    image: 'https://picsum.photos/seed/sarah/100/100',
    quote: 'Teach Skills completely transformed my career. I went from a generic IT support role to a certified Salesforce Admin in just 3 months. The hands-on projects were the key.'
  },
  {
    name: 'David Chen',
    role: 'Salesforce Developer',
    company: 'FinServe Solutions',
    image: 'https://picsum.photos/seed/david/100/100',
    quote: 'The Apex and LWC modules are incredibly detailed. I was struggling with asynchronous Apex before this course, but the instructors broke it down perfectly.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CRM Consultant',
    company: 'Cloud Innovators',
    image: 'https://picsum.photos/seed/emily/100/100',
    quote: 'Best investment I ever made. The community support and the mock exams helped me pass my Platform App Builder certification on the first try.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-blue-500">thousands</span> of students
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it. See what our alumni have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-slate-800 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
