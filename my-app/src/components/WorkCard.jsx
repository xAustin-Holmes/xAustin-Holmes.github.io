import "./WorkCard.css";

export default function WorkCard({ title, company, fromTo, children }) {
  return (
    <div className="work-card">
        <h2 className="work-card-title">{title}</h2>
        <div className="work-card-header">
            <h3 className="work-card-title">{company}</h3>
            <span className="work-card-dates">{fromTo}</span>
        </div>
        <p className="work-card-description">{children}</p>
    </div>
  );
}