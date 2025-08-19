import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            Austin<span className="navbar-dot">.</span>
          </a>
          <ul className="navbar-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contacts</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;