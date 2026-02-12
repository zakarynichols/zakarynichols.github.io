export default function Experience() {
  const experiences = [
    {
      company: 'MFB Technologies',
      location: 'Bronson, MI',
      role: 'Software Developer',
      period: 'April 2021 to October 2025',
      website: 'align.lawyer',
      achievements: [
        'Built a real-time collaborative document platform enabling multiple users to annotate, navigate, and review large legal binders simultaneously',
        'Designed and implemented conflict resolution logic for concurrent edits, preventing data loss while maintaining user intent during simultaneous updates',
        'Implemented a full binder export system capable of assembling deeply nested documents, tabs, and metadata into correct, printable hierarchies',
        'Managed Azure DevOps sprint boards and sprint planning, rotating ownership each sprint for shared team responsibility',
        'Monitored, reported, and resolved Snyk security vulnerabilities to maintain application security and compliance',
        'Built internal tooling and scripts to support development workflows, end-to-end testing, debugging, and deployment automation',
      ],
      technologies: ['React', 'TypeScript', 'Real-time Collaboration', 'PostgreSQL', 'Azure DevOps', 'Security'],
    },
    {
      company: 'Spectrum Net Designs',
      location: 'Grand Rapids, MI',
      role: 'Full-Stack Developer',
      period: 'February 2021 to April 2021',
      website: 'auctioneersoftware.com',
      achievements: [
        'Delivered end-to-end features across the stack, from database migrations and backend services to frontend UI updates',
        'Designed and evolved SQL schemas for live auction data, balancing new feature requirements with backward compatibility',
        'Built Node.js service handlers to process real-time auction events, bids, and state changes with low latency and predictable behavior',
        'Debugged production issues involving data consistency and event timing during high-traffic auctions',
        'Collaborated with product and backend teams to trace data flows, diagnose system bottlenecks, and stabilize core auction functionality',
      ],
      technologies: ['Node.js', 'SQL', 'Real-time Systems', 'Frontend UI', 'Database Design'],
    },
    {
      company: 'Firefly Integrations',
      location: 'Middlebury, IN',
      role: 'Web/Mobile Developer',
      period: 'October 2020 to February 2021',
      website: 'fireflyint.com',
      achievements: [
        'Developed a cross-platform mobile application using React and TypeScript that interfaced directly with embedded RV control hardware via Bluetooth Low Energy',
        'Implemented real-time control and monitoring for RV systems including lighting, HVAC, power distribution, and tank sensors',
        'Worked closely with firmware engineers to debug and resolve low-level communication issues involving endianness, signal framing, timing, and protocol design',
        'Built fault-tolerant synchronization logic to keep the mobile UI consistent with asynchronous and partially connected hardware states',
        'Investigated system-wide bugs spanning firmware, BLE transport, and frontend logic to improve responsiveness and reliability',
        'Documented integration patterns and debugging workflows to streamline future collaboration between mobile and firmware teams',
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
            Full-stack engineering specializing in backend architecture, database design, and production SaaS
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
                  <span className="experience-location">{exp.location}</span>
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
        <div className="personal-project">
          <h3 className="personal-project-title">Personal SaaS Project</h3>
          <div className="project-card">
            <div className="project-header">
              <h4>FULL Barbell</h4>
              <span className="project-status">Deployed on DigitalOcean Ubuntu 24</span>
            </div>
            <p className="project-description">
              Architected and deployed a subscription-based SaaS analytics platform featuring
              containerized infrastructure, Stripe billing integration, Auth0 authentication,
              PostgreSQL data modeling, automated migrations, health checks, and CI/CD pipelines.
              This project demonstrates end-to-end SaaS lifecycle understanding.
            </p>
            <div className="project-technologies">
              <span className="technology-tag">Docker</span>
              <span className="technology-tag">PostgreSQL</span>
              <span className="technology-tag">Stripe</span>
              <span className="technology-tag">Auth0</span>
              <span className="technology-tag">DigitalOcean</span>
              <span className="technology-tag">Nginx</span>
              <span className="technology-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
