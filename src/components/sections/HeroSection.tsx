import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
    {/* Background with Ken Burns effect */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 20, ease: "linear" }}
    >
      <img src={heroImage} alt="" className="w-full h-full object-cover" />
    </motion.div>

    {/* Multi-layer overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
    
    {/* Red accent light */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={logo}
          alt="Impact Force Protection Services"
          className="h-32 w-32 mx-auto mb-10 rounded-full object-cover border-2 border-primary/80 animate-pulse-glow"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase mb-4 text-foreground">
          Impact <span className="text-primary text-glow">Force</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
          <p className="font-heading text-xl md:text-2xl tracking-[0.4em] uppercase text-primary/90">
            Protection Services
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
        </div>
      </motion.div>

      <motion.p
        className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Our reputation and standing is backed up by our own name. Always close to you — providing reliable, professional security across South Africa.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-5 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a
          href="#contact"
          className="group inline-flex items-center justify-center px-10 py-4 gradient-primary text-primary-foreground font-heading text-lg tracking-wider uppercase box-glow hover:shadow-[0_0_40px_hsl(0_85%_45%/0.5)] transition-all duration-300"
        >
          Get Protected
        </a>
        <a
          href="#services"
          className="group inline-flex items-center justify-center px-10 py-4 border border-primary/40 text-primary font-heading text-lg tracking-wider uppercase hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 backdrop-blur-sm"
        >
          Our Services
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
