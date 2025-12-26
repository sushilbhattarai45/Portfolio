import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          just connecting. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
          >
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Mail className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                {personalInfo.email}
              </p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
          >
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Github className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">GitHub</p>
              <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                View Profile
              </p>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
          >
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Linkedin className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
              <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                Connect
              </p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Send me an email
          </a>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
