export default function Services() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Complete application development from requirements to deployment. I build secure, scalable web applications with proper architecture from day one.',
      features: [
        'Database schema design and optimization',
        'RESTful API development',
        'Frontend implementation with React and TypeScript',
        'Authentication and authorization systems',
        'Payment integration (Stripe)',
        'Production deployment on Ubuntu/DigitalOcean',
      ],
    },
    {
      title: 'Backend Architecture',
      description: 'Scalable backend systems designed for growth. I create robust architectures that handle complexity while maintaining performance.',
      features: [
        'PostgreSQL database design',
        'Docker containerization',
        'DevOps and CI/CD pipelines',
        'Nginx configuration',
        'Security hardening',
        'Performance optimization',
      ],
    },
    {
      title: 'Payment & Billing Integration',
      description: 'Revenue-focused integrations built for recurring and transaction-based business models. I implement secure, scalable billing systems that grow with your customer base.',
      features: [
        'Stripe subscription implementation',
        'Usage-based pricing models',
        'Proration and billing corrections',
        'Revenue recognition tracking',
        'Payment failure handling',
        'Customer portal integration',
      ],
    },
    {
      title: 'Application Hardening & Migration',
      description: 'Transform codebases into production-ready systems. I help startups and businesses scale from prototype to stable, maintainable applications.',
      features: [
        'Codebase audit and refactoring',
        'Database migration strategies',
        'Security review and compliance',
        'Technical debt resolution',
        'Architecture documentation',
        'Team knowledge transfer',
      ],
    },
    {
      title: 'Frontend Engineering',
      description: 'Complex frontend architecture for scalable applications. I build maintainable systems with proper state management and performance patterns.',
      features: [
        'React & TypeScript applications',
        'State management architecture',
        'Performance optimization and code splitting',
        'Accessibility (WCAG) compliance',
        'Component libraries and design systems',
        'Type-safe API integration',
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
