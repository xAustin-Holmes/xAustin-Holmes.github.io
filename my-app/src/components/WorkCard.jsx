import "./WorkCard.css";

export default function WorkCard({ title, fromTo, children }) {
  return (
    <div className="work-card">
      <div className="work-card-header">
        <h2 className="work-card-title">{title}</h2>
        <span className="work-card-dates">{fromTo}</span>
      </div>
      <p className="work-card-description">{children}</p>
    </div>
  );
}