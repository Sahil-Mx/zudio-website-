import { ShieldCheck, Leaf, HeartPulse, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

const badges = [
  {
    icon: ShieldCheck,
    title: "100% Real Chicken",
    desc: "Sourced locally from trusted farms."
  },
  {
    icon: Leaf,
    title: "Freshly Prepared",
    desc: "Hand-breaded in our kitchens daily."
  },
  {
    icon: HeartPulse,
    title: "Highest Hygiene",
    desc: "4-step safety protocol in all stores."
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    desc: "Committed to 100% recyclable material."
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-4 text-gray-900">Our Quality Promise</h2>
          <p className="text-gray-500 max-w-xl mx-auto px-4 font-medium">
            We never compromise on the quality of our food. That's why every bite is finger lickin' good.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand transition-all duration-300">
                <badge.icon className="w-10 h-10 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{badge.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px]">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
