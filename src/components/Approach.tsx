export default function Approach() {
  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'I work with you to deeply understand your product goals, user needs, and technical constraints. This foundation ensures every technical decision aligns with your business objectives.',
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Before writing code, I design the system architecture: database schemas, API contracts, and infrastructure requirements. This prevents costly rewrites and ensures scalability.',
    },
    {
      number: '03',
      title: 'Iterative Development',
      description: 'I build in sprints with regular demos. You see progress weekly, provide feedback early, and stay in control of the direction. Code is production-ready from day one.',
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing strategies including unit tests, integration tests, and manual verification. Security vulnerabilities are identified and resolved proactively.',
    },
    {
      number: '05',
      title: 'Deployment & Documentation',
      description: 'Production deployment with proper infrastructure, CI/CD pipelines, and monitoring. Complete documentation ensures your team can maintain and evolve the system.',
    },
  ]

  const principles = [
    {
      title: 'Systems Thinking',
      description: 'I consider the entire system with frontend, backend, database, infrastructure, and operations as interconnected components that must work together harmoniously.',
    },
    {
      title: 'Production-Grade Code',
      description: 'Every line of code is written with production in mind: error handling, logging, monitoring hooks, security considerations, and maintainability.',
    },
    {
      title: 'Communication First',
      description: 'Clear, consistent communication throughout the project. Regular updates, proactive problem identification, and collaborative decision-making.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'I aim to be a technical partner, not just a hired hand. I think about your business success, not just completing tickets.',
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
          <h3 className="subsection-title">My Process</h3>
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

        <div className="principles-section">
          <h3 className="subsection-title">Core Principles</h3>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card">
                <h4 className="principle-title">{principle.title}</h4>
                <p className="principle-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
