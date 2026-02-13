export default function Approach() {
  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'I work with you to deeply understand your product goals, user needs, and technical constraints. Every technical decision aligns with your business objectives.',
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Before writing code, I design the system architecture: database schemas, API contracts, and infrastructure. This prevents costly rewrites and ensures scalability.',
    },
    {
      number: '03',
      title: 'Iterative Development',
      description: 'I build in sprints with regular demos. You see progress weekly, provide feedback early, and stay in control. Code is production-ready from day one.',
    },
    {
      number: '04',
      title: 'Testing & Quality',
      description: 'Comprehensive testing strategies including unit tests, integration tests, and manual verification. Security vulnerabilities are identified and resolved proactively.',
    },
    {
      number: '05',
      title: 'Deployment & Documentation',
      description: 'Production deployment with CI/CD pipelines and monitoring. Complete documentation ensures your team can maintain and evolve the system.',
    },
  ]

  return (
    <section id="approach" className="approach">
      <div className="approach-container">
        <div className="section-header">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            A collaborative, transparent approach to delivering production-ready software
          </p>
        </div>

        <div className="process-section">
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <span className="step-number">{step.number}</span>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
