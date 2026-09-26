import { Download, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const resumePath = "/new_Resume.pdf";

const Resume = () => {
  const { ref, inView } = useInView<HTMLElement>(0.55);

  return (
    <section
      id="resume"
      data-nav="resume"
      ref={ref}
      className={`panel flex items-center ${inView ? "is-active" : ""}`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <p className="watermark font-display text-[24vw] leading-none text-white/[0.04]">CV</p>
      </div>

      <div className="panel-copy relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p
            className="reveal text-xs font-medium uppercase tracking-[0.28em] text-mute"
            style={{ animationDelay: "0.05s" }}
          >
            Resume
          </p>
          <h2
            className="reveal mt-4 font-display text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.9] text-paper"
            style={{ animationDelay: "0.12s" }}
          >
            The PDF, with
            <span className="italic text-limeglow"> the dates.</span>
          </h2>
          <p
            className="reveal mt-5 max-w-md text-mute"
            style={{ animationDelay: "0.22s" }}
          >
            School, the Z1 internship, and the same projects, written in order.
          </p>
          <div
            className="reveal mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.32s" }}
          >
            <a
              href={resumePath}
              download="Sushil_Bhattarai_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-limeglow px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-limeglow hover:text-limeglow"
            >
              <FileText size={16} />
              Open PDF
            </a>
          </div>
        </div>

        <div
          className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
          style={{ animationDelay: "0.24s" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-mute">Education</p>
          <p className="mt-4 font-display text-4xl leading-none text-paper">{personalInfo.degree}</p>
          <p className="mt-3 text-lg text-paper/90">{personalInfo.education}</p>
          <div className="mt-6 flex gap-8 border-t border-white/10 pt-6">
            <div>
              <p className="font-display text-3xl text-limeglow">{personalInfo.gpa}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">GPA</p>
            </div>
            <div>
              <p className="text-paper">{personalInfo.duration}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
