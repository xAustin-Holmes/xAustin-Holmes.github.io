import WorkCard from "./WorkCard";
import "./WorkExperience.css";

export default function WorkExperience () {

    return (
        <div className="work-experience">
            <h1 className="work-experience-title">Work Experience</h1>

            <WorkCard title="Kora Software" fromTo="Jan 2023 - July 2025">
                Built and maintained frontend applications with React, focusing on
                performance, accessibility, and user experience.
            </WorkCard>

            <WorkCard title="Another Company" fromTo="2021 - 2023">
                Worked on UI components and collaborated with backend engineers to
                deliver seamless features.
            </WorkCard>
        </div>
    );
}