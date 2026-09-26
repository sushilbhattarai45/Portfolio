import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToId } from "../lib/scroll";

const navItems = [
  { label: "Intro", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [current, setCurrent] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById("scroller");
    const nodes = root?.querySelectorAll<HTMLElement>("[data-nav]");
    if (!root || !nodes?.length) return;

    const ratios = new Map<Element, { key: string; ratio: number }>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.nav ?? "";
          ratios.set(entry.target, {
            key,
            ratio: entry.isIntersecting ? entry.intersectionRatio : 0,
          });
        }

        let bestKey = "";
        let bestRatio = 0.4;
        ratios.forEach(({ key, ratio }) => {
          if (ratio > bestRatio) {
            bestKey = key;
            bestRatio = ratio;
          }
        });

        if (bestKey) setCurrent(bestKey);
      },
      { root, threshold: [0.25, 0.5, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <button
          type="button"
          onClick={() => go("about")}
          className="font-display text-2xl italic tracking-tight text-paper"
        >
          Sushil
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = current === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-limeglow" : "text-mute hover:text-paper"
                }`}
                aria-current={active ? "true" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-limeglow transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="text-paper md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`block w-full py-3 text-left text-lg ${
                current === item.id ? "text-limeglow" : "text-paper"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
