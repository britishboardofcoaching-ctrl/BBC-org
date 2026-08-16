import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "BBC transformed my coaching career by providing internationally respected accreditation and exceptional training. The rigor of their programs is unmatched.",
    author: "Sarah Jenkins",
    role: "Executive Coach, UK",
    initials: "SJ",
    image: 'https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote: "Professional, inspiring, and truly committed to coaching excellence. Joining the BBC network has opened doors I never thought possible in my consulting business.",
    author: "David Chen",
    role: "Leadership Consultant, Singapore",
    initials: "DC",
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote: "One of the best investments I have made in my professional journey. The practical learning and ethical framework give me immense confidence with my clients.",
    author: "Elena Rodriguez",
    role: "Life Coach, Canada",
    initials: "ER",
    image: 'https://images.pexels.com/photos/7491147/pexels-photo-7491147.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-secondary inline-block"></span>
            Global Impact
            <span className="w-8 h-[2px] bg-secondary inline-block"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground leading-tight">
            Voices of Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border relative mt-8 hover-lift"
            >
              <div className="absolute -top-6 left-8 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground/80 italic text-base leading-relaxed mb-8 font-serif">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="w-14 h-14 border-2 border-muted">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/5 text-primary font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
