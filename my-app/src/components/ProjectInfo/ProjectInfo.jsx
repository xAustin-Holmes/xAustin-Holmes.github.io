import Icon from "../Icon/Icon";
import './ProjectInfo.css'

export default function ProjectInfo ({ title, src, alt, children }) {

    return (
        <div>
            <h2>
                {title}
                <a href="https://github.com/xAustin-Holmes">
                <Icon
                    title="GitHub"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                />
                </a>
            </h2>
            <p>{children}</p>
        </div>
    );
}