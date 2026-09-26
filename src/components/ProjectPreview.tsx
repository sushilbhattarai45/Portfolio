export function ProjectPreview({
  src,
  alt,
  href,
  host,
}: {
  src: string;
  alt: string;
  href?: string;
  host: string;
}) {
  const frame = (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-mute">
          {host}
        </div>
      </div>
      <img src={src} alt={alt} className="block h-auto w-full" />
    </div>
  );

  if (!href) return frame;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="block transition-transform duration-300 hover:-translate-y-1"
    >
      {frame}
    </a>
  );
}
