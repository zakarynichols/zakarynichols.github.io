export function Experience() {
  return (
    <section className="section">
      <h2>Experience</h2>
      <a href="/resume.pdf" download>Resume (PDF)</a>
      <div className="experience">
        <div className="job">
          <h3>MFB Technologies - Align Binders (Remote)</h3>
          <p><a href="https://align.lawyer" target="_blank" rel="noopener noreferrer">align.lawyer</a></p>
          <p className="position">Software Developer</p>
          <p className="duration location">April 2021 – October 2025 | Washington, DC</p>
          <ul className="achievements">
            <li>Built a real-time collaborative document platform that lets multiple users annotate, navigate, and review large legal binders simultaneously.</li>
            <li>Designed and implemented conflict resolution logic for concurrent edits, preventing data loss while keeping user intent intact during simultaneous updates.</li>
            <li>Implemented a full binder export system capable of assembling deeply nested documents, tabs, and metadata into a correct, printable hierarchy.</li>
            <li>Managed Azure DevOps sprint boards and sprint planning, rotating ownership each sprint to ensure shared team responsibility and continuity.</li>
            <li>Monitored, reported, and resolved Snyk security vulnerabilities to maintain application security and compliance.</li>
            <li>Completed assigned monthly Wyzer security training focused on secure coding practices and vulnerability awareness.</li>
            <li>Built internal tooling and scripts to support development workflows, end-to-end testing, debugging, and deployment automation.</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Spectrum Net Designs - Auctioneer Software</h3>
          <p><a href="https://www.auctioneersoftware.com/" target="_blank" rel="noopener noreferrer">auctioneersoftware.com</a></p>
          <p className="position">Full-Stack Developer</p>
          <p className="duration location">February 2021 – April 2021 | Grand Rapids, MI</p>
          <ul className="achievements">
            <li>Delivered end-to-end features across the stack, from database migrations and backend services to frontend UI updates.</li>
            <li>Designed and evolved SQL schemas for live auction data, balancing new feature requirements with backward compatibility.</li>
            <li>Built Node.js service handlers to process real-time auction events, bids, and state changes with low latency and predictable behavior.</li>
            <li>Debugged production issues involving data consistency and event timing during high-traffic auctions.</li>
            <li>Worked with product and backend teams to trace data flows, diagnose system bottlenecks, and stabilize core auction functionality.</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Firefly Integrations - Vegatouch Team</h3>
          <p><a href="https://www.fireflyint.com/" target="_blank" rel="noopener noreferrer">fireflyint.com</a></p>
          <p className="position">Web/Mobile Developer</p>
          <p className="duration location">October 2020 – February 2021 | Middlebury, IN</p>
          <ul className="achievements">
            <li>Developed a cross-platform mobile application using React and TypeScript that interfaced directly with embedded RV control hardware via Bluetooth Low Energy.</li>
            <li>Implemented real-time control and monitoring for RV systems including lighting, HVAC, power distribution, and tank sensors.</li>
            <li>Worked closely with firmware engineers to debug and resolve low-level communication issues involving endianness, signal framing, timing, and protocol design.</li>
            <li>Built fault-tolerant synchronization logic to keep the mobile UI consistent with asynchronous and partially connected hardware states.</li>
            <li>Investigated system-wide bugs spanning firmware, BLE transport, and frontend logic to improve responsiveness and reliability.</li>
            <li>Documented integration patterns and debugging workflows to streamline future collaboration between mobile and firmware teams.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}