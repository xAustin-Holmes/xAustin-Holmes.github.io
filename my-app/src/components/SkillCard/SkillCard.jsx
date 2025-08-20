import "./SkillCard.css";

export default function SkillCard({ title, icon, description}) {
  return (
    <div className="skill-card">
        <div className="icon-title">
            <img
                src={icon}
                alt={title}
            />
            <h2>{title}</h2>
        </div>
    </div>
  );
}