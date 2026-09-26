import { useEffect, useRef } from "react";

type Skill = { name: string; src: string };

const runtime: Skill[] = [
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Node", src: "/logos/node.svg" },
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
];

const platform: Skill[] = [
  { name: "MongoDB", src: "/logos/mongodb.svg" },
  { name: "SQL", src: "/logos/sql.svg" },
  { name: "Redis", src: "/logos/redis.svg" },
  { name: "Kafka", src: "/logos/kafka.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg" },
  { name: "Nginx", src: "/logos/nginx.svg" },
  { name: "Digital Ocean", src: "/logos/digitalocean.svg" },
  { name: "EC2", src: "/logos/ec2.svg" },
  { name: "S3", src: "/logos/s3.svg" },
];

const SIZE = 520;
const OUTER_RADIUS = 204;
const INNER_RADIUS = 112;

export function SkillOrbit() {
  return (
    <div className="relative h-[520px] w-[520px]" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,255,74,0.08),transparent_68%)]" />

      <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={OUTER_RADIUS}
          fill="none"
          stroke="rgba(244,240,230,0.22)"
          strokeDasharray="2 7"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={INNER_RADIUS}
          fill="none"
          stroke="rgba(214,255,74,0.45)"
          strokeDasharray="2 6"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-limeglow shadow-[0_0_22px_#d6ff4a]" />

      <Ring skills={platform} radius={OUTER_RADIUS} duration={46} />
      <Ring skills={runtime} radius={INNER_RADIUS} duration={28} reverse phase={0.5} />
    </div>
  );
}

function Ring({
  skills,
  radius,
  duration,
  reverse = false,
  phase = 0,
}: {
  skills: Skill[];
  radius: number;
  duration: number;
  reverse?: boolean;
  phase?: number;
}) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const place = (turns: number) => {
      skills.forEach((_, index) => {
        const node = refs.current[index];
        if (!node) return;
        const direction = reverse ? -1 : 1;
        const angle =
          (turns * direction + (index + phase) / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        node.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      });
    };

    place(0);
    if (reduce) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      place((now - start) / 1000 / duration);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, phase, radius, reverse, skills]);

  return (
    <div className="absolute left-1/2 top-1/2 h-0 w-0">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          ref={(node) => {
            refs.current[index] = node;
          }}
          className="absolute left-0 top-0"
        >
          <span className="flex w-[4.75rem] flex-col items-center gap-1.5 text-center">
            <img src={skill.src} alt="" className="h-7 w-7" />
            <span className="text-[11px] font-medium leading-tight tracking-wide text-paper/85">
              {skill.name}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
