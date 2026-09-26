export function scrollToId(id: string) {
  const node = document.getElementById(id);
  if (!node) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
