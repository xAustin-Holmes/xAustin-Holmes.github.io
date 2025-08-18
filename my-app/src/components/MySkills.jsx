import { useState } from 'react';
import Button from './Button';
import SkillCard from './SkillCard';
import skillsList from './skillsList';
import "./MySkills.css";

export default function MySkills () {
    const [view, setView] = useState(skillsList['frontend']);

    const handleFrontend = () => {
        setView(skillsList['frontend']);
    }

    const handleBackend = () => {
        setView(skillsList['backend']);
    }

    const handleTools = () => {
        setView(skillsList['tools']);
    }

    return (
        <div className="my-skills">
          <h2>My Skills</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit...........................</h3>
          <div className="buttons">
            <Button onClick={handleFrontend}>Frontend</Button>
            <Button onClick={handleBackend}>Backend</Button>
            <Button onClick={handleTools}>Tools</Button>
          </div>
          <div className="skills-grid">
            {view.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      );
}