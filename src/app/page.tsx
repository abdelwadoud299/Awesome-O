import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-8">
      {/* Background Decor: Clean, precise geometric lines instead of bright glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute w-[1px] h-full bg-brand-medium left-1/4 top-0"></div>
        <div className="absolute w-[1px] h-full bg-brand-medium right-1/4 top-0"></div>
        <div className="absolute h-[1px] w-full bg-brand-medium top-1/3 left-0"></div>
        <div className="absolute h-[1px] w-full bg-brand-medium bottom-1/3 left-0"></div>
      </div>

      <main className="z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Sleek Badge */}
        <div className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-brand-medium bg-brand-primary/30 text-brand-accent text-sm font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
          MTI FCAI Student Activity
        </div>

        {/* Precise Typography Header */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-center leading-tight">
          Ready to <span className="text-brand-light">Level Up?</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center mb-12 font-light leading-relaxed">
          At Awesome-O, we construct pioneers. Cultivate hands-on technical proficiencies and real-world interpersonal skills in a sophisticated peer community.
        </p>

        {/* Technical Buttons styling without aggressive shadows/neon */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/committees"
            className="group relative px-8 py-4 bg-brand-light text-white rounded-md font-medium tracking-wide overflow-hidden flex items-center justify-center transition-all hover:bg-brand-medium border border-transparent"
          >
            <span className="relative z-10">Explore Committees</span>
            {/* Subtle highlight effect instead of big shadow */}
            <div className="absolute inset-0 h-full w-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 bg-transparent text-brand-accent rounded-md font-medium tracking-wide flex items-center justify-center transition-all border border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10"
          >
            Why Join Us?
          </Link>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full">
          {[
            { title: "Technical Expertise", desc: "Software Engineering & Artificial Intelligence" },
            { title: "Media Production", desc: "High-fidelity Design & Video Generation" },
            { title: "Operational Logistics", desc: "Precision Event Management & Coordination" }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-brand-medium/40 bg-brand-primary/10 hover:border-brand-light/60 transition-colors">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
