import Button from "../Button/Button";
import profilePic from "../../assets/profilePicture.png";
import "./Intro.css";

export default function Intro () {
  return (
    <div className="intro-container">
        <div className="intro-left">
            <h2>Austin Holmes</h2>
            <div className="intro-description">
                Hi, I'm Austin! I'm a creative and Frontend Developer with 3+ years of experience 
                in building high-performance, scalable, and responsive web solutions.
            </div>
            <div className="intro-button">
                <a href="https://www.linkedin.com/in/austindaneholmes/">
                    <Button>Let's Connect!</Button>
                </a>
            </div>
        </div>

        <div className="intro-right">
            <img
                src={profilePic}
                alt="Austin Profile"
            />
        </div>
    </div>
  );
}
