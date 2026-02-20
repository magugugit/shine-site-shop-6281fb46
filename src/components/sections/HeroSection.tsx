import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
    <div className="relative z-10 container mx-auto px-6 text-center">
      <img src={logo} alt="Impact Force Protection Services" className="h-28 w-28 mx-auto mb-8 rounded-full object-cover border-2 border-primary box-glow opacity-0 animate-fade-in" />
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider uppercase mb-6 opacity-0 animate-fade-in-up text-foreground">
        Impact Force
      </h1>
      <p className="font-heading text-xl md:text-2xl tracking-[0.3em] uppercase text-primary mb-8 opacity-0 animate-fade-in-up [animation-delay:200ms]">
        Protection Services
      </p>
      <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10 opacity-0 animate-fade-in-up [animation-delay:400ms]">
        Our reputation and standing is backed up by our own name. Always close to you — providing reliable, professional security across South Africa.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up [animation-delay:600ms]">
        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading text-lg tracking-wider uppercase hover:bg-primary/90 transition-colors box-glow">
          Get Protected
        </a>
        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-heading text-lg tracking-wider uppercase hover:bg-primary/10 transition-colors">
          Our Services
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
