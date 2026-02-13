export default function Experience() {
  const experiences = [
    {
      company: 'MFB Technologies, Inc.',
      app: 'Align Binders',
      website: 'align.lawyer',
      description: 'Real-time collaborative document platform enabling legal teams to annotate, navigate, and review case binders simultaneously.',
      contributions: [
        'Architected multi-tenant platform handling 500+ page binders with enterprise-grade security and access controls',
        'Built scalable export system supporting high-volume litigation workflows',
        'Designed compliant UI components meeting enterprise security and accessibility standards',
        'Led Azure DevOps sprints and established CI/CD practices for team productivity',
      ],
      technologies: ['React', 'TypeScript', 'Real-time Collaboration', 'Node.js', 'Azure DevOps', 'Security', 'UI/UX'],
    },
    {
      company: 'Spectrum Net Designs, Inc.',
      app: 'Auctioneer Software',
      website: 'auctioneersoftware.com',
      description: 'Real-time auction platform handling high-volume bidding events with low latency and reliable data consistency.',
      contributions: [
        'Delivered end-to-end features for high-volume auction and e-commerce platform',
        'Designed SQL schemas for transactional data under mission-critical production workflows',
        'Built low-latency APIs for bidder-facing interfaces during peak traffic events',
        'Created responsive, accessible UI components for customer-facing auction experiences',
      ],
      technologies: ['React', 'Node.js', 'SQL', 'Real-time Systems', 'Frontend UI', 'Database Design', 'Accessibility'],
    },
    {
      company: 'Firefly Integrations, LLC',
      app: 'Global Link',
      website: 'fireflyint.com',
      description: 'Cross-platform mobile app connecting to embedded RV control systems via Bluetooth Low Energy for real-time monitoring.',
      contributions: [
        'Developed cross-platform mobile app for enterprise RV hardware integration via Bluetooth Low Energy',
        'Built real-time control/monitoring for mission-critical RV systems (HVAC, power, sensors)',
        'Collaborated with firmware engineers on low-level communication protocols',
        'Designed custom BLE profile for seamless hardware device communication',
      ],
      technologies: ['React', 'TypeScript', 'Bluetooth Low Energy', 'Mobile Development', 'Firmware Integration'],
    },
  ]

  const featuredProject = {
    name: 'FULL Barbell',
    website: 'fullbarbell.com',
    status: 'Closed Beta',
    description: 'Full-stack fitness tracking application with Dockerized infrastructure, Stripe billing, and secure Auth0 authentication.',
    achievements: [
      'Designed and deployed full-stack web application with Dockerized infrastructure on Ubuntu 24',
      'Implemented Stripe subscription billing with customer portal and proration handling',
      'Built secure authentication with Auth0 supporting multi-factor authentication',
      'Architected PostgreSQL database with optimized indexes for high-volume data queries',
    ],
    technologies: ['Docker', 'PostgreSQL', 'Stripe', 'Auth0', 'Ubuntu', 'CI/CD', 'React', 'TypeScript', 'Node.js'],
  }

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Production systems I've contributed to
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-company">{exp.app}</h3>
                  <span className="experience-company-sub">{exp.company}</span>
                </div>
                <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="experience-website">
                  {exp.website}
                </a>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.contributions.map((contribution, contributionIndex) => (
                  <li key={contributionIndex}>{contribution}</li>
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
            <h3 className="personal-project-title">Featured Project</h3>
          </div>
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-company">{featuredProject.name}</h3>
                <span className="experience-status">{featuredProject.status}</span>
              </div>
              <a href={`https://${featuredProject.website}`} target="_blank" rel="noopener noreferrer" className="experience-website">
                {featuredProject.website}
              </a>
            </div>
            <p className="experience-description">{featuredProject.description}</p>
            <ul className="experience-achievements">
              {featuredProject.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
            <div className="experience-technologies">
              {featuredProject.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
