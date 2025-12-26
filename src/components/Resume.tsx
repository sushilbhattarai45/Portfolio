import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const resumePath = '/new_resume.pdf';

  return (
    <section id="resume" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Resume</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          View or download my complete resume
        </p>

        <div className="flex justify-center mb-8">
          <a
            href={resumePath}
            download="Sushil_Bhattarai_Resume.pdf"
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 shadow-md">
          <div className="bg-white rounded-lg overflow-hidden shadow-inner">
            <iframe
              src={resumePath}
              className="w-full h-[600px] md:h-[800px]"
              title="Resume PDF"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FileText size={18} />
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
