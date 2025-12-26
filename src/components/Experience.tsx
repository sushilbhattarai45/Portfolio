import { experiences } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional experience in software development and research
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Briefcase size={18} />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 text-sm md:text-right">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1.5">•</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
