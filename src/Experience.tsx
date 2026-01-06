export function Experience() {
  return (
    <section className="section">
      <h2>Experience</h2>
      <div className="experience">
        <div className="job">
          <h3>MFB Technologies – Align Binders (Remote)</h3>
          <p className="position">Frontend Developer</p>
          <p><a href="https://align.lawyer/" target="_blank" rel="noopener noreferrer">align.lawyer</a></p>
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
          <p className="position">Full-Stack Developer</p>
          <p><a href="https://www.auctioneersoftware.com/" target="_blank" rel="noopener noreferrer">auctioneersoftware.com</a></p>
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
          <p className="position">Mobile Developer</p>
          <p><a href="https://www.fireflyint.com/" target="_blank" rel="noopener noreferrer">fireflyint.com</a></p>
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
  )
}