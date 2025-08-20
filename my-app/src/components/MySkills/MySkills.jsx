import { useState } from 'react';
import Button from '..//Button/Button';
import SkillCard from '../SkillCard/SkillCard';
import skillsList from '../skillsList';
import "./MySkills.css";

export default function MySkills () {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  return (
    <div className="my-skills">
      <h2>What I Bring to the Table!</h2>
      
      <div className="buttons">
        <Button 
          onClick={() => handleTabClick("frontend")} 
          className={activeTab === "frontend" ? "active" : ""}
        >
          Frontend
        </Button>
        <Button 
          onClick={() => handleTabClick("backend")} 
          className={activeTab === "backend" ? "active" : ""}
        >
          Backend
        </Button>
        <Button 
          onClick={() => handleTabClick("tools")} 
          className={activeTab === "tools" ? "active" : ""}
        >
          Tools
        </Button>
      </div>

      <div className="skills-grid">
        {skillsList[activeTab].map((skill, index) => (
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
