export default function Services() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Complete application development from requirements to production deployment. I build secure, scalable web applications with proper architecture from day one.',
      features: [
        'Database schema design and optimization',
        'RESTful API development',
        'Frontend implementation with React and TypeScript',
        'Authentication and authorization systems',
        'Payment integration (Stripe)',
        'Production deployment on Ubuntu/DigitalOcean',
        'Docker containerization',
        'CI/CD pipelines',
      ],
    },
    {
      title: 'Application Hardening & Migration',
      description: 'Transform codebases into production-ready systems. I help businesses scale from prototype to stable, maintainable applications.',
      features: [
        'Codebase audit and refactoring',
        'Database migration strategies',
        'Security review and compliance',
        'Technical debt resolution',
        'Performance optimization',
        'Architecture documentation',
      ],
    },
    {
      title: 'Technical Consulting',
      description: 'Architecture reviews and technical guidance for complex decisions. I help teams make informed choices about infrastructure, scalability, and stack decisions.',
      features: [
        'Architecture review and recommendations',
        'Technology stack evaluation',
        'Scalability planning',
        'Security auditing',
        'Team mentorship',
        'Technical roadmap creation',
      ],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            End-to-end solutions built for scalability, security, and performance
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
