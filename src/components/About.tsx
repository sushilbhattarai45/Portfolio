import { personalInfo, skills } from "../data/portfolioData";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              {personalInfo.title}
            </p>

            <div className="mb-6 space-y-2">
              <div className="flex items-center text-gray-700">
                <GraduationCap className="mr-2" size={20} />
                <span>{personalInfo.education}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="mr-2" size={20} />
                <span>Hattiesburg, MS</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.github}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="#resume"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl md:text-8xl font-bold shadow-2xl">
                {/* {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")} */}

                <img
                  src={"/image.png"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2">
                <p className="text-sm text-gray-600">GPA</p>
                <p className="text-2xl font-bold text-blue-600">
                  {personalInfo.gpa}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
