import ProjectImage from "../ProjectImage/ProjectImage";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import Icon from "../Icon/Icon";
import screenshot from "../../assets/screenshot.png"

import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
        <h2>My Projects</h2>

        {/* Project 1 */}
        <div className="project">
            <div className="project-info">
            <ProjectInfo title="Project 1">
                Most developers created React routing with React Router v5. In 2021, React Router’s maintainers released v6 by solving some issues that existed in v5, such as somewhat large bundle size, inconsistent APIs, path ranking problems, and more.
            </ProjectInfo>
            <div className="tech-stack">
                <span>Tech Stack: </span>
                <Icon title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML" />
                <Icon title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="CSS" />
                <Icon title="JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="JavaScript" />
            </div>
            </div>

            <div className="project-image">
            <ProjectImage src={screenshot} alt="website screenshot" />
            </div>
        </div>

        {/* Project 2 (auto reverses w/ CSS) */}
        <div className="project">
            <div className="project-info">
            <ProjectInfo title="Project 2">
                Most developers created React routing with React Router v5. In 2021, React Router’s maintainers released v6 by solving some issues that existed in v5, such as somewhat large bundle size, inconsistent APIs, path ranking problems, and more.
            </ProjectInfo>
            <div className="tech-stack">
                <span>Tech Stack: </span>
                <Icon title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="React" />
                <Icon title="Tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="Tailwind" />
            </div>
            </div>

            <div className="project-image">
            <ProjectImage src={screenshot} alt="website screenshot" />
            </div>
        </div>

            {/* Project 3 */}
        <div className="project">
            <div className="project-info">
            <ProjectInfo title="Project 3">
                Most developers created React routing with React Router v5. In 2021, React Router’s maintainers released v6 by solving some issues that existed in v5, such as somewhat large bundle size, inconsistent APIs, path ranking problems, and more.
            </ProjectInfo>
            <div className="tech-stack">
                <span>Tech Stack: </span>
                <Icon title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML" />
                <Icon title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="CSS" />
                <Icon title="JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="JavaScript" />
            </div>
            </div>

            <div className="project-image">
            <ProjectImage src={screenshot} alt="website screenshot" />
            </div>
        </div>

    </div>
  );
}
