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
          <p className="subtitle">Software Developer | Problem Solver</p>
          <p className="bio">
            I build systems and tools end-to-end: from idea and architecture, to development, testing, and deployment, to monitoring, optimization, and scaling in production. I focus on creating solutions that solve complex problems reliably, efficiently, and maintainably, ensuring real-world impact every step of the way.
          </p>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience">
            <div className="job">
              <h3>MFB Technologies – Align Binders (Remote)</h3>
              <p className="position">Frontend Developer</p>
              <p className="duration">Apr 2021 – Oct 2025</p>
              <p className="tech">TypeScript, React, Node.js (internal tooling/dev tools), Pipeline scripts (DevOps)</p>
              <ul className="achievements">
                <li>Built an interactive platform that allowed multiple users to annotate and navigate documents in real time, ensuring smooth collaboration on large files.</li>
                <li>Developed systems that automatically resolved conflicts when multiple users edited the same document simultaneously, keeping data consistent.</li>
                <li>Created a library of reusable, high-performance TypeScript components that sped up development across multiple projects.</li>
                <li>Improved real-time state management to handle rapid updates, ensuring the interface remained responsive and accurate during heavy usage.</li>
                <li>Built a comprehensive binder export feature that organized and exported entire binder structures with tabs and documents in the correct hierarchy, implementing complex logic to ensure data integrity and proper formatting.</li>
              </ul>
            </div>
            
            <div className="job">
              <h3>Auctioneer Software (Remote)</h3>
              <p className="position">Frontend Developer</p>
              <p className="duration">Feb 2021 – Apr 2021</p>
              <p className="tech">Node.js backend, SQL (MySQL) with Knex, React, TypeScript</p>
              <ul className="achievements">
                <li>Delivered end-to-end feature implementations spanning database schema migrations, Node.js business logic, and frontend integration.</li>
                <li>Designed and extended SQL migrations to evolve core auction data models while preserving backward compatibility and data integrity.</li>
                <li>Developed and optimized Node.js service handlers for real-time auction events, ensuring consistent, low-latency communication between client and server.</li>
                <li>Integrated new backend endpoints into the React frontend, streamlining user interactions and improving system reliability across the stack.</li>
                <li>Collaborated with product and backend teams to debug system-level issues, analyze data flows, and maintain stability under high traffic conditions.</li>
              </ul>
            </div>
            
            <div className="job">
              <h3>Firefly Integrations – VegaTouch Team</h3>
              <p className="position">Frontend Developer</p>
              <p className="duration location">Oct 2020 – Feb 2021 | Middlebury, IN</p>
              <p className="tech">Capacitor.js, React, TypeScript</p>
              <ul className="achievements">
                <li>Developed and maintained a TypeScript + React application that interfaced directly with embedded RV control hardware via Capacitor.js and Bluetooth Low Energy (BLE).</li>
                <li>Worked with the firmware engineering team to debug communication between mobile and microcontroller layers, resolving issues related to endianness, signal framing, and protocol timing.</li>
                <li>Designed and tested application logic for real-time control of physical RV systems, including lighting, HVAC, power distribution, and tank sensors.</li>
                <li>Implemented fault-tolerant data synchronization between the mobile frontend and the multiplexed control network, ensuring consistency across asynchronous hardware states.</li>
                <li>Contributed to system-level investigations spanning firmware, BLE communication, and frontend layers, improving overall reliability and responsiveness of the control system.</li>
                <li>Documented integration workflows and assisted in establishing debugging procedures for future firmware–frontend collaboration.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Go Projects</h2>
          <div className="projects">
            <div className="project">
              <h3><a href="#">REST API Service</a></h3>
              <p>High-performance JSON API with PostgreSQL, built with Go's standard library for maximum performance.</p>
              <p className="tech">Go, net/http, sql.DB, PostgreSQL, JSON</p>
            </div>
            <div className="project">
              <h3><a href="#">Database CLI Tool</a></h3>
              <p>Command-line interface for database migrations and data management with interactive prompts.</p>
              <p className="tech">Go, cobra, promptui, database/sql</p>
            </div>
            <div className="project">
              <h3><a href="#">Data Processing Pipeline</a></h3>
              <p>Concurrent data processing service with worker pools and batch database operations.</p>
              <p className="tech">Go, goroutines, channels, worker pools, PostgreSQL</p>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <h2>Writing</h2>
          <div className="writing">
            <div className="post">
              <h3><a href="#">Building REST APIs with Go's Standard Library</a></h3>
              <p className="date">2024-10-15</p>
              <p>How to create clean, fast APIs using only Go's built-in packages.</p>
            </div>
            <div className="post">
              <h3><a href="#">Database Patterns in Go</a></h3>
              <p className="date">2024-09-28</p>
              <p>Effective database connection management and query patterns with sql.DB.</p>
            </div>
            <div className="post">
              <h3><a href="#">CLI Development with Cobra</a></h3>
              <p className="date">2024-09-10</p>
              <p>Building professional command-line tools with proper error handling and user experience.</p>
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
