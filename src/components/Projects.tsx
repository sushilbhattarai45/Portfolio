import { projects, experiences } from '../data/portfolioData';
import { ExternalLink, Award, Briefcase, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const featuredExperience = experiences[0];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of distributed systems, full-stack platforms, and production mobile applications
        </p>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-start">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                {project.badge && (
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-yellow-500" size={20} />
                    <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                      {project.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {featuredExperience && (
            <aside
              id="experience"
              className="lg:sticky lg:top-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                  <Briefcase size={16} />
                  Experience
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{featuredExperience.role}</h3>
              <p className="text-blue-700 font-semibold mb-5">
                {featuredExperience.organization}
              </p>

              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" />
                  <span>{featuredExperience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  <span>{featuredExperience.location}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {featuredExperience.description.map((desc) => (
                  <li key={desc} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-500" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-sm font-semibold text-slate-700">Production impact</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">1,000+</p>
                <p className="text-sm text-slate-600">
                  vehicles integrated with live GPS and remote controls
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
