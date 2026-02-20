import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";
import { Shield, Eye, Users, Building2, Camera, Zap, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import FleetSection from "@/components/sections/FleetSection";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Shield, title: "Security Guarding", desc: "24/7 professional guards screened to PSIRA standards" },
  { icon: Eye, title: "CCTV & Monitoring", desc: "Installation and real-time surveillance monitoring" },
  { icon: Users, title: "Event Security", desc: "Conferences, festivals, and high-profile event protection" },
  { icon: Building2, title: "Commercial Security", desc: "Banks, malls, offices, and property developments" },
  { icon: Camera, title: "Investigation Services", desc: "Security reconnaissance and intelligence gathering" },
  { icon: Zap, title: "Armed Response", desc: "Non-lethal armed guards with rapid response links" },
];

const markets = [
  { title: "Industrial", items: ["Factories & Wholesales", "Airports", "Distribution Centers", "Mines"] },
  { title: "Commercial", items: ["Banks", "Property Developments", "High Profile Offices", "Shops"] },
  { title: "Retail & Events", items: ["Shopping Malls", "Conferences & Festivals", "Private Guarding", "Hotels & Casinos"] },
];

const navLinks = ["About", "Services", "Team", "Markets", "Contact"];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg shadow-background/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src={logo} alt="Impact Force Logo" className="h-11 w-11 rounded-full object-cover border border-primary/40 group-hover:border-primary transition-colors" />
            <div>
              <span className="font-heading text-lg font-bold tracking-wider text-foreground">IMPACT FORCE</span>
              <span className="block text-[10px] text-muted-foreground tracking-[0.25em] uppercase">Protection Services</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 gradient-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 gradient-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:shadow-[0_0_20px_hsl(0_85%_45%/0.4)] transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase border-b border-border/50"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <HeroSection />

      {/* Divider */}
      <div className="divider-line" />

      {/* About */}
      <section id="about" className="py-28 bg-background noise-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Established 2013</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">About Us</h2>
              <div className="h-1 w-20 gradient-primary mb-12" />
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16">
              <ScrollReveal direction="left">
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Established in 2013, Impact Force Protection Services is a proudly South African security company that has grown from modest beginnings into a dynamic force in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Built on a client-focused and system-oriented approach, our people, services, processes and procedures provide a professional yet personal service. Our team of specialized individuals is driven to go further than merely responding to your security requirements.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  {[
                    { title: "Vision", text: "To provide reliable, cost effective & professional service and to be the leading SME in the markets we service." },
                    { title: "Mission", text: "Placing screened, reliable and trustworthy guards in accordance with PSIRA standards." },
                    { title: "Aim", text: "To become a respected leading company providing stability to both clients and staff alike." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-primary/60 pl-6 hover:border-primary transition-colors">
                      <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary noise-overlay relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-line" />
        <div className="absolute bottom-0 left-0 right-0 divider-line" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {["Total commitment to our clients", "Conducting business with integrity", "Excellence in efficiency & reliability"].map((value, i) => (
              <ScrollReveal key={value} delay={i * 0.1}>
                <div className="p-8">
                  <div className="h-1 w-10 gradient-primary mx-auto mb-5" />
                  <p className="text-secondary-foreground font-medium text-lg">{value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-background noise-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">What We Offer</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">Our Services</h2>
            <div className="h-1 w-20 gradient-primary mb-14" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  className="group p-8 bg-card border border-border card-hover relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-full h-0.5 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="h-10 w-10 text-primary mb-5 transition-all duration-300 group-hover:text-glow" />
                  <h3 className="font-heading text-xl font-semibold tracking-wider uppercase mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line" />

      <TeamSection />

      <div className="divider-line" />

      <FleetSection />

      <div className="divider-line" />

      {/* Markets */}
      <section id="markets" className="py-28 bg-secondary noise-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Industries We Serve</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">Target Markets</h2>
            <div className="h-1 w-20 gradient-primary mb-14" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {markets.map((market, i) => (
              <ScrollReveal key={market.title} delay={i * 0.12}>
                <motion.div
                  className="p-8 bg-card border border-border card-hover relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-heading text-2xl font-bold tracking-wider uppercase text-primary mb-6">{market.title}</h3>
                  <ul className="space-y-4">
                    {market.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground hover:text-foreground/80 transition-colors">
                        <span className="h-2 w-2 gradient-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* Contact */}
      <section id="contact" className="py-28 bg-background noise-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">Contact Us</h2>
            <div className="h-1 w-20 gradient-primary mb-14" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <ScrollReveal direction="left">
              <div className="space-y-10">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-wider uppercase text-foreground mb-5">Head Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 group">
                      <div className="p-2 bg-primary/10 rounded-sm">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground pt-1">120 Langermann Drive, Kensington, Johannesburg 2094</p>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-2 bg-primary/10 rounded-sm">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground">011 618 9226</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-10">
                  <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-4">Ncebakazi Bango — Director</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-1.5 bg-primary/10 rounded-sm"><Phone className="h-4 w-4 text-primary" /></div>
                      <p className="text-muted-foreground text-sm">073 855 0762</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-1.5 bg-primary/10 rounded-sm"><Mail className="h-4 w-4 text-primary" /></div>
                      <p className="text-muted-foreground text-sm">pinkybango1986@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-10">
                  <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-4">Christian Mboko — Founder & Operations Chief</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="p-1.5 bg-primary/10 rounded-sm"><Phone className="h-4 w-4 text-primary" /></div>
                      <p className="text-muted-foreground text-sm">073 075 7770</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-1.5 bg-primary/10 rounded-sm"><Mail className="h-4 w-4 text-primary" /></div>
                      <p className="text-muted-foreground text-sm">krismboko33@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-10 bg-card border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 gradient-primary" />
                <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-6">Company Registration</h3>
                <div className="space-y-4 mb-10">
                  {[
                    ["Registration Number", "2013/124232/07"],
                    ["PSIRA Registration", "2625129"],
                    ["SARS Registration", "9443593174"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center border-b border-border/50 pb-3">
                      <span className="text-muted-foreground text-sm">{label}</span>
                      <span className="text-foreground font-heading text-sm tracking-wider">{val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Impact Force Protection Services operates nationally through South Africa, providing comprehensive security solutions to industrial, commercial, and retail sectors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-secondary border-t border-border noise-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <img src={logo} alt="Impact Force" className="h-9 w-9 rounded-full object-cover border border-primary/30" />
              <span className="font-heading text-sm tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors">Impact Force Protection Services</span>
            </a>
            <div className="flex items-center gap-6">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase hidden sm:block">
                  {item}
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Impact Force Protection Services (Pty) Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
