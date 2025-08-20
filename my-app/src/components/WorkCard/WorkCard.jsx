import { useState, useRef } from "react";
import "./WorkCard.css";

export default function WorkCard({ title, company, fromTo, children }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="work-card" onClick={toggleExpand} style={{ cursor: "pointer" }}>
      <h2 className="work-card-title">
        {title}
      </h2>
      <div className="work-card-header">
        <h3 className="work-card-title">{company}</h3>
        <span className="work-card-dates">{fromTo}</span>
      </div>

      
      <div
        ref={contentRef}
        className={`work-card-description-wrapper ${expanded ? "expanded" : ""}`}
        style={{ maxHeight: expanded ? `${contentRef.current?.scrollHeight}px` : "0px" }}
      >
        <p className="work-card-description">{children}</p>
      </div>
    </div>
  );
}
