import './App.css'

export function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main className="main">
        <section id="about" className="section">
          <h1>Zakary Nichols</h1>
          <p className="subtitle">Go Developer</p>
          <p className="bio">
            Building reliable systems and tools in Go. Focused on backend development. Advocate for simple, maintainable code.
          </p>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience">
            <div className="job">
              <h3>MFB Technologies</h3>
              <p className="position">Frontend Developer, Align Binders (Remote)</p>
              <p className="duration">Apr 2021 – Oct 2025</p>
              <ul className="achievements">
                <li>Built complex data structures and algorithms for document annotation, highlighting, and navigation systems</li>
                <li>Implemented client-side conflict resolution mechanisms for multi-user document synchronization</li>
                <li>Developed efficient state management patterns for handling large document datasets and real-time updates</li>
                <li>Created reusable component libraries with TypeScript interfaces and performance optimizations</li>
              </ul>
            </div>
            
            <div className="job">
              <h3>Auctioneer Software</h3>
              <p className="position">Frontend Developer (Remote)</p>
              <p className="duration">Feb 2021 – Apr 2021</p>
              <ul className="achievements">
                <li>Developed real-time auction frontend with React/TypeScript and GraphQL subscriptions for live bid updates</li>
                <li>Built Node.js backend services with SQL database integration for auction state management</li>
                <li>Created internal tooling scripts with Node.js for build automation and development workflow optimization</li>
                <li>Implemented client-side data caching and state synchronization for high-frequency auction updates</li>
              </ul>
            </div>
            
            <div className="job">
              <h3>Firefly Integrations</h3>
              <p className="position">Frontend Developer, VegaTouch Team</p>
              <p className="duration location">Oct 2020 – Feb 2021 | Middlebury, IN</p>
              <ul className="achievements">
                <li>Built React/TypeScript mobile application for real-time control of embedded RV systems</li>
                <li>Implemented asynchronous state management for device communication and command queuing</li>
                <li>Developed data processing algorithms for sensor readings and system status monitoring</li>
                <li>Created modular component architecture for scalable hardware interface abstraction</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Go Projects</h2>
          <div className="projects">
            <div className="project">
              <h3><a href="#">[Go Project Name]</a></h3>
              <p>Concurrent web service built with Go's standard library and goroutines.</p>
              <p className="tech">Go, net/http, goroutines, channels</p>
            </div>
            <div className="project">
              <h3><a href="#">[CLI Tool]</a></h3>
              <p>Command-line tool for system monitoring and performance analysis.</p>
              <p className="tech">Go, cobra, prometheus client</p>
            </div>
            <div className="project">
              <h3><a href="#">[Microservice]</a></h3>
              <p>RESTful API service with PostgreSQL integration and JWT authentication.</p>
              <p className="tech">Go, gin, gorm, PostgreSQL, Docker</p>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <h2>Writing</h2>
          <div className="writing">
            <div className="post">
              <h3><a href="#">Understanding Go's Concurrency Model</a></h3>
              <p className="date">2024-10-15</p>
              <p>Deep dive into goroutines, channels, and select statements with practical examples.</p>
            </div>
            <div className="post">
              <h3><a href="#">Building Production-Ready Go Services</a></h3>
              <p className="date">2024-09-28</p>
              <p>Best practices for logging, monitoring, and error handling in Go applications.</p>
            </div>
            <div className="post">
              <h3><a href="#">Go vs. Traditional Systems Languages</a></h3>
              <p className="date">2024-09-10</p>
              <p>Comparing Go's approach to systems programming with C and Rust.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Email: zakary.nichols@example.com<br />
            GitHub: <a href="https://github.com/zakarynichols">zakarynichols</a><br />
            LinkedIn: <a href="https://linkedin.com/in/zakarynichols">zakarynichols</a>
          </p>
        </section>
      </main>
    </div>
  )
}
