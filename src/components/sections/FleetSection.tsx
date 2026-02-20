import fleetImage from "@/assets/fleet.jpg";

const FleetSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">Our Fleet</h2>
          <div className="h-1 w-20 bg-primary mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our branded response vehicles are always ready to deploy. Each vehicle is marked with our company details and registration numbers for full accountability and rapid identification.
          </p>
          <ul className="space-y-3">
            {["Branded patrol vehicles", "Rapid armed response capability", "GPS-tracked fleet", "24/7 deployment ready"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden border border-border">
          <img src={fleetImage} alt="Impact Force branded response vehicles" className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default FleetSection;
