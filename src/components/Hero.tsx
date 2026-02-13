import { SiReact, SiGo, SiNodedotjs, SiPostgresql, SiDocker, SiDigitalocean, SiNginx, SiStripe, SiAuth0, SiTypescript, SiUbuntu } from 'react-icons/si'

const technologies = [
  { icon: SiGo, label: 'Go', color: '#00ADD8' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiStripe, label: 'Stripe', color: '#635BFF' },
  { icon: SiAuth0, label: 'Auth0', color: '#EB5424' },
  { icon: SiDigitalocean, label: 'DigitalOcean', color: '#0080FF' },
  { icon: SiNginx, label: 'Nginx', color: '#009639' },
  { icon: SiUbuntu, label: 'Ubuntu', color: '#E95420' },
]

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <p className="hero-subtitle">Full-Stack Developer</p>
            <h1 className="hero-title">
              I Build Production-Ready<br />
              Web Applications
            </h1>
            <p className="hero-description">
              I help founders and businesses turn complex product requirements into fully deployed,
              production-ready web applications. From database architecture to frontend experience
              to Dockerized deployment on Ubuntu, I handle the entire development lifecycle.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Start a Project
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('experience')}>
                View Work
              </button>
            </div>
            <div className="tech-stack">
              <div className="tech-stack-header">Production Stack</div>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <tech.icon size={28} color={tech.color} />
                    <span className="tech-label">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
