import WorkCard from "./WorkCard";
import "./WorkExperience.css";

export default function WorkExperience () {

    return (
        <div className="work-experience">
            <h2 className="work-experience-title">Work Experience</h2>

            <WorkCard 
                title="Fullstack Developer" 
                company="Kora Software" 
                fromTo="Nov 2022 - Present"
            >
                Built and maintained frontend applications with React, focusing on
                performance, accessibility, and user experience.
            </WorkCard>

            <WorkCard 
                title="Control Systems Engineer" 
                company="Cogent, Inc" 
                fromTo="Jan 2023 - July 2025"
            >
                Worked on UI components and collaborated with backend engineers to
                deliver seamless features.
            </WorkCard>

            <WorkCard 
                title="I.T. Team Indirect Co-op" 
                company="Mercedes-Benz U.S. International" 
                fromTo="April 2020 - December 2020"
            >
                • MiM App Development Work Package lead that involved an agile project implementation
                of an administrative portal.
                • Liaising with executives and stakeholders to better understand their expectations, receive
                their feedback on ongoing work, and incorporate their thoughts to improve eventual
                outcomes.
            </WorkCard>

            <WorkCard 
                title="Systems & Controls Engineering Co-op" 
                company="Mercedes-Benz U.S. International" 
                fromTo="Jan 2020 - April 2020"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis libero risus, at pellentesque ante pellentesque vel. Aliquam quis ipsum purus. Nunc a enim fermentum, venenatis dolor vitae, aliquam ex. Suspendisse a varius velit. Sed at vehicula metus. Proin sit amet augue ac lacus consequat ullamcorper eu ac nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pulvinar vulputate velit, id lacinia turpis tristique nec. Fusce facilisis dolor a molestie tincidunt. Nam placerat nisl risus, id tempor risus blandit vitae. Donec rutrum ultricies diam eget luctus.
            </WorkCard>
        </div>
    );
}