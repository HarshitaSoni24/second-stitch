import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export const CountUpTicker = ({ value, label, icon }) => {
  const ref = useRef(null);
  // Reduced margin to ensure it triggers earlier when scrolling
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="feature-card bg-white border-2 border-amber-100 flex flex-col items-center justify-center py-10 shadow-xl">
      <div className="text-5xl mb-4">{icon}</div>
      <div className="flex items-baseline gap-1">
        {/* Added explicit Espresso color and font weight */}
        <motion.span className="text-6xl font-black text-[#2C2621]">{displayValue}</motion.span>
        <span className="text-4xl font-black text-[#2C2621]">+</span>
      </div>
      <p className="text-[#2C2621]/60 font-bold uppercase tracking-widest text-[10px] mt-2">
        {label}
      </p>
    </div>
  );
};
export const CircularJourney = () => {
  const steps = [
    { title: "Discarded", desc: "Garments destined for landfills.", icon: "🗑️" },
    { title: "AI Scanned", desc: "Neural analysis of structure.", icon: "🔍" },
    { title: "Redesigned", desc: "A sustainable blueprint.", icon: "✨" },
    { title: "Re-stitched", desc: "New life for your wardrobe.", icon: "🧵" }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-12 text-center text-amber-950">The Circular Journey</h2>
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Connection line centered vertically relative to the icons */}
        <div className="absolute top-10 left-0 w-full h-0.5 bg-amber-900/10 hidden md:block" />
        
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center text-center flex-1"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-xl border-2 border-amber-50 flex items-center justify-center text-3xl mb-4">
              {step.icon}
            </div>
            <h4 className="font-bold text-lg text-amber-950 mb-1">{step.title}</h4>
            <p className="text-[11px] text-amber-950/50 max-w-[140px] leading-tight">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};