import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const featured = experiences[0];
  const { ref, inView } = useInView<HTMLElement>(0.55);

  if (!featured) return null;

  return (
    <section
      id="experience"
      data-nav="experience"
      ref={ref}
      className={`panel flex items-center ${inView ? "is-active" : ""}`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="orb" style={{ background: "#c4b5fd", left: "-8vw", bottom: "-10vh" }} />

      <div className="panel-copy relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <p
          className="reveal text-xs font-medium uppercase tracking-[0.28em] text-mute"
          style={{ animationDelay: "0.05s" }}
        >
          Experience
        </p>
        <h2
          className="reveal mt-4 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.4rem)] font-normal leading-[0.92] text-paper"
          style={{ animationDelay: "0.12s" }}
        >
          {featured.role}
        </h2>
        <p
          className="reveal mt-3 font-display text-2xl italic text-[#c4b5fd] md:text-3xl"
          style={{ animationDelay: "0.2s" }}
        >
          {featured.organization}
        </p>

        <div
          className="reveal mt-6 flex flex-wrap gap-5 text-sm text-mute"
          style={{ animationDelay: "0.28s" }}
        >
          <span className="inline-flex items-center gap-2">
            <Calendar size={15} />
            {featured.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} />
            {featured.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Briefcase size={15} />
            1,000+ vehicles in production
          </span>
        </div>

        <ul className="mt-8 max-w-3xl space-y-4">
          {featured.description.map((item, index) => (
            <li
              key={item}
              className="reveal flex gap-4 text-sm leading-relaxed text-paper/85 md:text-base"
              style={{ animationDelay: `${0.36 + index * 0.08}s` }}
            >
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#c4b5fd]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
