import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import { scrollToId } from "../lib/scroll";
import { ProjectPreview } from "./ProjectPreview";

type Scene = {
  kicker: string;
  line: string;
  accent: string;
  cta: string;
  nextLabel: string;
  nextId: string;
  image: string;
  host: string;
};

const scenes: Scene[] = [
  {
    kicker: "Email",
    line: "Distributed email delivery platform.",
    accent: "#d6ff4a",
    cta: "Open site",
    nextLabel: "PassMyFiles.com",
    nextId: "project-1",
    image: "/ehulak.png",
    host: "ehulak.tech",
  },
  {
    kicker: "Files",
    line: "Quick file sharing platform.",
    accent: "#7dd3fc",
    cta: "Open site",
    nextLabel: "Ragat Nepal",
    nextId: "project-2",
    image: "/passmyfile.png",
    host: "passmyfiles.com",
  },
  {
    kicker: "Donors",
    line: "Real-time blood donor matching.",
    accent: "#fb7185",
    cta: "Get the app",
    nextLabel: "Experience",
    nextId: "experience",
    image: "/ragatnepal.png",
    host: "play.google.com",
  },
];

const Projects = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const root = document.getElementById("scroller");
    const nodes = root?.querySelectorAll<HTMLElement>("[data-project-index]");
    if (!root || !nodes?.length) return;

    const ratios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number(entry.target.getAttribute("data-project-index"));
          ratios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let best = -1;
        let bestRatio = 0.45;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            best = index;
            bestRatio = ratio;
          }
        });

        setActive(best === -1 ? null : best);
      },
      { root, threshold: [0.2, 0.45, 0.65, 0.85] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {projects.map((project, index) => {
        const scene = scenes[index];
        if (!scene) return null;
        const visible = active === index;
        const number = String(index + 1).padStart(2, "0");

        return (
          <section
            key={project.title}
            id={index === 0 ? "projects" : `project-${index}`}
            data-nav="projects"
            data-project-index={index}
            className={`panel flex items-center ${visible ? "is-active" : ""}`}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(820px circle at 78% 42%, ${scene.accent}33, transparent 58%)`,
              }}
            />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
            <div className="orb" style={{ background: scene.accent, right: "6vw", top: "18vh" }} />

            <div className="panel-copy relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-5 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,540px)] lg:gap-12">
              <div>
                <p
                  className="reveal text-xs font-medium uppercase tracking-[0.28em]"
                  style={{ color: scene.accent, animationDelay: "0.05s" }}
                >
                  {number} / {String(projects.length).padStart(2, "0")} · {scene.kicker}
                </p>

                <h2
                  className="reveal mt-3 font-display text-[clamp(2.7rem,5vw,4.6rem)] font-normal leading-[0.92] text-paper"
                  style={{ animationDelay: "0.12s" }}
                >
                  {project.title}
                </h2>

                <p
                  className="reveal mt-4 font-display text-2xl italic text-paper/80 md:text-3xl"
                  style={{ animationDelay: "0.2s" }}
                >
                  {scene.line}
                </p>

                <p
                  className="reveal mt-4 max-w-xl text-sm leading-relaxed text-mute md:text-[15px]"
                  style={{ animationDelay: "0.28s" }}
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="reveal rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-paper/85"
                      style={{ animationDelay: `${0.34 + techIndex * 0.04}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="reveal mt-7 flex flex-wrap items-center gap-6"
                  style={{ animationDelay: "0.55s" }}
                >
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                      style={{ background: scene.accent }}
                    >
                      {scene.cta}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => scrollToId(scene.nextId)}
                    className="text-sm text-mute transition-colors hover:text-paper"
                  >
                    Next — {scene.nextLabel}
                  </button>
                </div>
              </div>

              <div className="reveal w-full" style={{ animationDelay: "0.18s" }}>
                <ProjectPreview
                  src={scene.image}
                  alt={`${project.title} screenshot`}
                  href={project.liveLink}
                  host={scene.host}
                />
              </div>
            </div>
          </section>
        );
      })}

      <nav
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex"
        aria-label="Projects"
      >
        {projects.map((project, index) => {
          const selected = active === index;
          return (
            <button
              key={project.title}
              type="button"
              onClick={() => scrollToId(index === 0 ? "projects" : `project-${index}`)}
              className="group flex items-center justify-end gap-3"
              aria-label={project.title}
              aria-current={selected ? "true" : undefined}
            >
              <span
                className={`text-[10px] uppercase tracking-[0.18em] transition-opacity ${
                  selected ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                }`}
                style={{ color: scenes[index].accent }}
              >
                {project.title}
              </span>
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: selected ? 18 : 8,
                  height: 8,
                  background: selected ? scenes[index].accent : "rgba(244,240,230,0.35)",
                }}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Projects;
