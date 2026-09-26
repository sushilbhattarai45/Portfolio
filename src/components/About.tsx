import { useRef, type MouseEvent } from "react";
import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { scrollToId } from "../lib/scroll";
import { SkillOrbit } from "./SkillOrbit";

function RevealWord({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden pb-1 ${className}`}>
      <span className="inline-block px-1">
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="intro-char"
            style={{ animationDelay: `${delay + index * 0.04}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}

const About = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [first, last] = personalInfo.name.split(" ");

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    glow.style.setProperty("--x", `${event.clientX - bounds.left}px`);
    glow.style.setProperty("--y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section
      id="about"
      data-nav="about"
      className="panel flex items-center"
      onMouseMove={onMove}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(540px circle at var(--x, 72%) var(--y, 38%), rgba(214,255,74,0.16), transparent 46%)",
        }}
      />
      <div
        className="orb"
        style={{
          right: "-4vw",
          top: "8vh",
          background: "#d6ff4a",
        }}
      />

      <div className="pointer-events-none absolute right-[max(0px,calc((100%-72rem)/2))] top-1/2 z-10 hidden origin-right -translate-y-1/2 scale-[0.72] lg:block xl:scale-[0.86] 2xl:scale-100">
        <SkillOrbit />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="max-w-xl lg:max-w-[28rem] xl:max-w-xl">
        <div className="intro-item" style={{ animationDelay: "0.05s" }}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-limeglow">
            {personalInfo.title}
          </p>
          <p className="mt-2 text-sm text-mute">{personalInfo.education}</p>
        </div>

        <h1 className="mt-5 font-display text-[clamp(3.6rem,8vw,7.2rem)] font-normal leading-[0.86] tracking-tight text-paper lg:text-[clamp(3.4rem,5.4vw,6rem)]">
          <RevealWord text={first} />
          <br />
          <RevealWord text={last} delay={0.28} className="italic text-limeglow" />
        </h1>

        <div
          className="draw-line mt-6 h-px w-28 bg-limeglow"
          aria-hidden
        />

        <p
          className="intro-item mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg"
          style={{ animationDelay: "0.45s" }}
        >
          {personalInfo.bio}
        </p>

        <div
          className="intro-item mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-paper"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-limeglow group-hover:bg-limeglow group-hover:text-ink">
              <Github size={16} />
            </span>
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-paper"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-limeglow group-hover:bg-limeglow group-hover:text-ink">
              <Linkedin size={16} />
            </span>
            LinkedIn
          </a>
          <button
            type="button"
            onClick={() => scrollToId("projects")}
            className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-paper"
          >
            Selected work
            <ArrowDownRight size={16} className="text-limeglow" />
          </button>
        </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("projects")}
        className="scroll-cue absolute bottom-8 left-8 z-10 hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-mute md:flex"
      >
        Scroll
        <span className="block h-8 w-px bg-limeglow" />
      </button>
    </section>
  );
};

export default About;
