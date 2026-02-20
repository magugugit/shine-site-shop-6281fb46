import teamPhoto1 from "@/assets/team-1.jpg";
import teamPhoto2 from "@/assets/team-2.jpg";
import companyVideo from "@/assets/company-video.mp4";

const TeamSection = () => (
  <section id="team" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2 text-foreground">Our Team</h2>
      <div className="h-1 w-20 bg-primary mb-4" />
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Our guards are PSIRA-registered, professionally trained, and committed to protecting what matters most.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="overflow-hidden border border-border bg-card">
          <img src={teamPhoto1} alt="Impact Force security team on duty" className="w-full h-80 object-cover object-top" />
          <div className="p-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-card-foreground mb-1">Leadership & Operations</h3>
            <p className="text-muted-foreground text-sm">Our founder Christian Mboko with a guard on active duty</p>
          </div>
        </div>
        <div className="overflow-hidden border border-border bg-card">
          <img src={teamPhoto2} alt="Impact Force guard in uniform" className="w-full h-80 object-cover object-top" />
          <div className="p-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-card-foreground mb-1">Professional Guards</h3>
            <p className="text-muted-foreground text-sm">Fully uniformed and equipped for any assignment</p>
          </div>
        </div>
        <div className="overflow-hidden border border-border bg-card">
          <video
            src={companyVideo}
            controls
            className="w-full h-80 object-cover"
            poster={teamPhoto1}
          />
          <div className="p-6">
            <h3 className="font-heading text-lg font-semibold tracking-wider uppercase text-card-foreground mb-1">See Us In Action</h3>
            <p className="text-muted-foreground text-sm">Watch our team delivering professional security services</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
