import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Experience />

        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
