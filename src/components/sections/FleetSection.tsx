import { motion } from "framer-motion";
import fleetImage from "@/assets/fleet.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const features = ["Branded patrol vehicles", "Rapid armed response capability", "GPS-tracked fleet", "24/7 deployment ready"];

const FleetSection = () => (
  <section className="py-28 bg-background noise-overlay">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <ScrollReveal direction="left">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Rapid Response</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">Our Fleet</h2>
          <div className="h-1 w-20 gradient-primary mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Our branded response vehicles are always ready to deploy. Each vehicle is marked with our company details and registration numbers for full accountability and rapid identification.
          </p>
          <ul className="space-y-4">
            {features.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </motion.li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <motion.div
            className="overflow-hidden border border-border relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={fleetImage}
              alt="Impact Force branded response vehicles"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FleetSection;
