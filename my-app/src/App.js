import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import WorkExperience from './components/WorkExperience';
import MySkills from './components/MySkills';
import Projects from './components/Projects';

function App() {
  return (
   <div>
      <header>
        <Navbar />
        <section id="home">
          <Intro />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="skills">
          <MySkills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </header>

    </div>
  );
}

export default App;
