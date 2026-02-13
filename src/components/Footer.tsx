export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Zakary Nichols</span>
            <span className="footer-tagline">Full-Stack Developer</span>
          </div>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Zakary Nichols. All rights reserved.
          </p>
          <p className="footer-location">Bronson, MI</p>
        </div>
      </div>
    </footer>
  )
}
