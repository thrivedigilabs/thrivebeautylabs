import { ArrowRight, Star, Lock, Download, Check } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-guides-mockup.jpg";

const features = [
  "True Tone Guide (70+ pages of shade mastery)",
  "Jetsetter Beauty Guide (50+ pages of travel expertise)",
  "Exclusive Bonus Resources",
  "Lifetime Access + Free Updates Forever",
  "7-Day Money-Back Guarantee",
];

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl mb-2">
            The ThriveBeautyLabs Expert Guide System
          </h2>

          <p className="eyebrow mb-6 tracking-widest">
            MADE FOR INDIAN SKIN TONES
          </p>

          {/* IMAGE — moved here & smaller */}
          <img
            src={heroImage}
            alt="ThriveBeautyLabs Guide System"
            className="w-full max-w-md mx-auto mb-10 rounded-2xl shadow-xl"
          />

          {/* Feature list */}
          <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
            {features.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Check className="text-success mt-1" size={18} />
                <span className="font-body">{item}</span>
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="mb-8">
            <p className="text-muted-foreground line-through text-lg mb-1">
              ₹2,999
            </p>
            <p className="font-heading text-6xl font-bold text-gradient-gold mb-2">
              ₹799
            </p>
            <span className="inline-block bg-destructive/10 text-destructive text-sm font-semibold px-4 py-1.5 rounded-full">
              YOU SAVE: ₹2,200 (73% OFF)
            </span>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="btn-primary w-full text-lg py-6 flex items-center justify-center gap-2 rounded-full"
          >
            GET INSTANT ACCESS NOW — ₹799
            <ArrowRight size={20} />
          </a>

          {/* Trust indicators */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-gold" />
              4.9/5 Rating
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} />
              Secure Checkout
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={14} />
              Instant Download
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
