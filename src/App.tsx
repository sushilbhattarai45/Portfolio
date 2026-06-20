import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
