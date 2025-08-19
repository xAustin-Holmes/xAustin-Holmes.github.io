import './ProjectImage.css'

export default function ProjectImage ({ title, src, alt }) {

    return (
        <div className="project-image">
            <img
                title={title}
                src={src}
                alt={alt}
            />
        </div>
    );
}