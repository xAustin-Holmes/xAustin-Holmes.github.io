import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './Footer.css';

export default function Footer () {
  const handleHaiku = () => {
      alert("Haiku Filler!");
  }

  return (
    <footer>
      <div className="top-row">
        <span>Contact</span>
        <div>
          <a href='https://www.linkedin.com/in/austindaneholmes/'>
            <Icon
              title='LinkedIn'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'
              alt='LinkedIn'
            />
          </a>
          <a href='https://github.com/xAustin-Holmes'>
            <Icon
              title='GitHub'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              alt='GitHub'
            />
          </a>
        </div>
        <Button onClick={handleHaiku}>Haiku?</Button>
      </div>
      <div className="bottom-row">
        Designed & Built by Austin Holmes © 2025
      </div>
    </footer>
  );
}
