import { motion } from "framer-motion";
import teamPhoto1 from "@/assets/team-1.jpg";
import teamPhoto2 from "@/assets/team-2.jpg";
import companyVideo from "@/assets/company-video.mp4";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  { img: teamPhoto1, title: "Leadership & Operations", desc: "Our founder Christian Mboko with a guard on active duty" },
  { img: teamPhoto2, title: "Professional Guards", desc: "Fully uniformed and equipped for any assignment" },
];

const TeamSection = () => (
  <section id="team" className="py-28 bg-secondary noise-overlay">
    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">The People Behind The Shield</p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-wider uppercase mb-4 text-foreground">Our Team</h2>
        <div className="h-1 w-20 gradient-primary mb-4" />
        <p className="text-muted-foreground mb-16 max-w-2xl text-lg leading-relaxed">
          Our guards are PSIRA-registered, professionally trained, and committed to protecting what matters most.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.15}>
            <motion.div
              className="group overflow-hidden border border-border bg-card card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-96 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-card-foreground mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.3}>
          <motion.div
            className="group overflow-hidden border border-border bg-card card-hover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden relative">
              <video
                src={companyVideo}
                controls
                className="w-full h-96 object-cover"
                poster={teamPhoto1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 border-t border-border">
              <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-card-foreground mb-1">See Us In Action</h3>
              <p className="text-muted-foreground text-sm">Watch our team delivering professional security services</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default TeamSection;
