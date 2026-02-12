import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgwjdrw")

  const projectTypes = [
    'Full-Stack SaaS Development',
    'Real-Time Systems',
    'Backend Architecture',
    'SaaS Hardening & Migration',
    'Consulting & Architecture Review',
    'Other',
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Not sure yet',
  ]

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    'Not urgent',
    'Flexibly',
  ]

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title">Let's Talk</h2>
            <p className="contact-intro">
              I'm always interested in hearing about interesting projects.
              Whether you have a clear vision or just an idea,
              let's discuss how I can help bring it to life.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:contact@zakarynichols.com" className="contact-value">
                  contact@zakarynichols.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Bronson, MI</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Availability</span>
                <span className="contact-value availability">Taking new projects</span>
              </div>
            </div>

            <div className="ideal-projects">
              <h3 className="ideal-projects-title">Ideal Projects</h3>
              <ul className="ideal-projects-list">
                <li>Early-stage SaaS applications</li>
                <li>Real-time collaboration platforms</li>
                <li>Data-heavy web applications</li>
                <li>Backend architecture projects</li>
                <li>System modernization and migration</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-success">
              <h3>Thank you for reaching out</h3>
              <p>I'll get back to you within 24-48 hours to discuss your project.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Let's Talk</h2>
          <p className="contact-intro">
            I'm always interested in hearing about interesting projects.
            Whether you have a clear vision or just an idea,
            let's discuss how I can help bring it to life.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:zakary@zakarynichols.com" className="contact-value">
                zakary@zakarynichols.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Bronson, MI</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Availability</span>
              <span className="contact-value availability">Taking new projects</span>
            </div>
          </div>

          <div className="ideal-projects">
            <h3 className="ideal-projects-title">Ideal Projects</h3>
            <ul className="ideal-projects-list">
              <li>Early-stage SaaS applications</li>
              <li>Real-time collaboration platforms</li>
              <li>Data-heavy web applications</li>
              <li>Backend architecture projects</li>
              <li>System modernization and migration</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project, goals, and any specific requirements..."
                rows={5}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
