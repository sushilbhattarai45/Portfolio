import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const links = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "sushilbhattarai45",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "sushilbhattarai45",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
];

const Contact = () => {
  const { ref, inView } = useInView<HTMLElement>(0.55);

  return (
    <section
      id="contact"
      data-nav="contact"
      ref={ref}
      className={`panel flex items-center ${inView ? "is-active" : ""}`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="orb" style={{ background: "#d6ff4a", right: "-6vw", bottom: "-12vh" }} />

      <div className="panel-copy relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <p
          className="reveal text-xs font-medium uppercase tracking-[0.28em] text-mute"
          style={{ animationDelay: "0.05s" }}
        >
          Contact
        </p>
        <h2
          className="reveal mt-4 max-w-3xl font-display text-[clamp(3.2rem,8vw,6.8rem)] font-normal leading-[0.9] text-paper"
          style={{ animationDelay: "0.12s" }}
        >
          Write
          <span className="italic text-limeglow"> to me.</span>
        </h2>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="reveal group rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-limeglow/50"
                style={{ animationDelay: `${0.24 + index * 0.08}s` }}
              >
                <Icon size={18} className="text-limeglow" />
                <p className="mt-6 text-xs uppercase tracking-[0.18em] text-mute">{link.label}</p>
                <p className="mt-2 break-all text-paper group-hover:text-limeglow">{link.value}</p>
              </a>
            );
          })}
        </div>

        <p
          className="reveal mt-10 text-sm text-mute"
          style={{ animationDelay: "0.5s" }}
        >
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </section>
  );
};

export default Contact;
