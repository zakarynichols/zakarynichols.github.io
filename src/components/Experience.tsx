export default function Experience() {
  const experiences = [
    {
      company: 'MFB Technologies',
      role: 'Software Developer',
      period: 'Apr 2021 – Oct 2025',
      website: 'align.lawyer',
      achievements: [
        'Architected multi-tenant legal platform handling 500+ page binders with enterprise-grade security and access controls',
        'Built scalable binder export system supporting high-volume litigation workflows',
        'Designed compliant UI components meeting enterprise security and accessibility standards',
        'Led Azure DevOps sprints and established CI/CD practices for team productivity',
      ],
      technologies: ['React', 'TypeScript', 'Real-time Collaboration', 'PostgreSQL', 'Azure DevOps', 'Security', 'UI/UX'],
    },
    {
      company: 'Spectrum Net Designs',
      role: 'Full-Stack Developer',
      period: 'Feb 2021 – Apr 2021',
      website: 'auctioneersoftware.com',
      achievements: [
        'Delivered end-to-end features for high-volume auction and e-commerce platform',
        'Designed SQL schemas for transactional data under mission-critical production workflows',
        'Built low-latency APIs for bidder-facing interfaces during peak traffic events',
        'Created responsive, accessible UI components for customer-facing auction experiences',
      ],
      technologies: ['React', 'Node.js', 'SQL', 'Real-time Systems', 'Frontend UI', 'Database Design', 'Accessibility'],
    },
    {
      company: 'Firefly Integrations',
      role: 'Web/Mobile Developer',
      period: 'Oct 2020 – Feb 2021',
      website: 'fireflyint.com',
      achievements: [
        'Developed cross-platform mobile app for enterprise RV hardware integration via Bluetooth Low Energy',
        'Built real-time control/monitoring for mission-critical RV systems (HVAC, power, sensors)',
        'Collaborated with firmware engineers on low-level communication protocols',
        'Designed custom BLE profile for seamless hardware device communication',
      ],
      technologies: ['React', 'TypeScript', 'Bluetooth Low Energy', 'Mobile Development', 'Firmware Integration'],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            A track record of delivering high-impact solutions across various industries and company stages
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className="experience-role">{exp.role}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="experience-website">
                {exp.website}
              </a>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="featured-project">
          <div className="section-header">
            <h3 className="personal-project-title">Featured SaaS Project</h3>
            <p className="section-subtitle">
              A complete subscription platform demonstrating full-stack SaaS capabilities
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h4>FULL Barbell</h4>
            </div>
            <p className="project-description">
              Architected and deployed a subscription-based SaaS analytics platform from concept to production,
              featuring containerized infrastructure, Stripe billing, Auth0 authentication,
              PostgreSQL data modeling, automated migrations, health checks, and CI/CD pipelines.
            </p>
            <div className="project-technologies">
              <span className="technology-tag">Docker</span>
              <span className="technology-tag">PostgreSQL</span>
              <span className="technology-tag">Stripe</span>
              <span className="technology-tag">Auth0</span>
              <span className="technology-tag">DigitalOcean</span>
              <span className="technology-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
