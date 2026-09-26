import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) return;

      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const scroller = document.getElementById("scroller");
      if (!scroller) return;

      const panels = [...scroller.querySelectorAll<HTMLElement>(".panel")];
      if (!panels.length) return;

      const current = panels.reduce(
        (closest, panel, index) => {
          const distance = Math.abs(panel.getBoundingClientRect().top);
          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;

      const direction = event.key === "ArrowDown" || event.key === "PageDown" ? 1 : -1;
      const next = panels[current + direction];
      if (!next) return;

      event.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      next.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="scroller">
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
