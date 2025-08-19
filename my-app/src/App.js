import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import WorkExperience from './components/WorkExperience/WorkExperience';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';

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
