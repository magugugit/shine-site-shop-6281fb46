import logo from "@/assets/logo.jpg";
import { Shield, Eye, Users, Building2, Camera, Zap, Phone, Mail, MapPin } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import FleetSection from "@/components/sections/FleetSection";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Impact Force Logo" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">IMPACT FORCE</span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase">Protection Services</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Services", "Team", "Markets", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* About */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">About Us</h2>
            <div className="h-1 w-20 bg-primary mb-10" />
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Established in 2013, Impact Force Protection Services is a proudly South African security company that has grown from modest beginnings into a dynamic force in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built on a client-focused and system-oriented approach, our people, services, processes and procedures provide a professional yet personal service. Our team of specialized individuals is driven to go further than merely responding to your security requirements.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Vision", text: "To provide reliable, cost effective & professional service and to be the leading SME in the markets we service." },
                  { title: "Mission", text: "Placing screened, reliable and trustworthy guards in accordance with PSIRA standards." },
                  { title: "Aim", text: "To become a respected leading company providing stability to both clients and staff alike." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-primary pl-6">
                    <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {["Total commitment to our clients", "Conducting business with integrity", "Excellence in efficiency & reliability"].map((value) => (
              <div key={value} className="p-6">
                <div className="h-1 w-10 bg-primary mx-auto mb-4" />
                <p className="text-secondary-foreground font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">Our Services</h2>
          <div className="h-1 w-20 bg-primary mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:border-glow"
              >
                <service.icon className="h-10 w-10 text-primary mb-4 group-hover:text-glow transition-all" />
                <h3 className="font-heading text-xl font-semibold tracking-wider uppercase mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <FleetSection />

      {/* Markets */}
      <section id="markets" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">Target Markets</h2>
          <div className="h-1 w-20 bg-primary mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {markets.map((market) => (
              <div key={market.title} className="p-8 bg-card border border-border">
                <h3 className="font-heading text-2xl font-bold tracking-wider uppercase text-primary mb-6">{market.title}</h3>
                <ul className="space-y-3">
                  {market.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">Contact Us</h2>
          <div className="h-1 w-20 bg-primary mb-12" />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-wider uppercase text-foreground mb-4">Head Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">120 Langermann Drive, Kensington, Johannesburg 2094</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">011 618 9226</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-4">Ncebakazi Bango — Director</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">073 855 0762</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">pinkybango1986@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-foreground mb-4">Christian Mboko — Founder & Operations Chief</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">073 075 7770</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">krismboko33@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-card border border-border">
              <p className="text-muted-foreground text-sm mb-4">Registration Number: 2013/124232/07</p>
              <p className="text-muted-foreground text-sm mb-4">PSIRA Registration: 2625129</p>
              <p className="text-muted-foreground text-sm mb-8">SARS Registration: 9443593174</p>
              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Impact Force Protection Services operates nationally through South Africa, providing comprehensive security solutions to industrial, commercial, and retail sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Impact Force" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-heading text-sm tracking-wider uppercase text-muted-foreground">Impact Force Protection Services</span>
          </div>
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Impact Force Protection Services (Pty) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
