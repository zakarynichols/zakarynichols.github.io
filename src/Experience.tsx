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
          <p className="tech">TypeScript, React, Node.js (internal tooling), DevOps pipelines</p>
          <ul className="achievements">
            <li>Built a real-time collaborative document platform that let multiple users annotate, navigate, and review large legal binders simultaneously without blocking or UI lag.</li>
            <li>Designed and implemented conflict resolution logic for concurrent edits, preventing data loss while keeping user intent intact during simultaneous updates.</li>
            <li>Developed a shared TypeScript component and utility library used across the product, reducing duplicate logic and making new feature development faster and more consistent.</li>
            <li>Refactored real-time state management to handle high-frequency updates from multiple users, significantly improving responsiveness during heavy collaboration sessions.</li>
            <li>Implemented a full binder export system capable of assembling deeply nested documents, tabs, and metadata into a correct, printable hierarchy.</li>
            <li>Wrote complex export and validation logic to guarantee data integrity, correct ordering, and formatting even with incomplete or partially edited binders.</li>
            <li>Built internal tooling and scripts to support development workflows, debugging, and deployment automation.</li>
            <li>Collaborated closely with product and backend engineers to iterate on real-time features and troubleshoot edge cases in production.</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Spectrum Net Designs – Auctioneer Software (Remote)</h3>
          <p className="position">Full-Stack Developer</p>
          <p><a href="https://auctioneersoftware.com/" target="_blank" rel="noopener noreferrer">auctioneersoftware.com</a></p>
          <p className="duration">Feb 2021 – Apr 2021</p>
          <p className="tech">Node.js, MySQL, React, TypeScript, RabbitMQ</p>
          <ul className="achievements">
            <li>Delivered end-to-end features across the stack, from database migrations and backend services to frontend UI updates.</li>
            <li>Designed and evolved SQL schemas for live auction data, balancing new feature requirements with backward compatibility.</li>
            <li>Built Node.js service handlers to process real-time auction events, bids, and state changes with low latency and predictable behavior.</li>
            <li>Integrated backend APIs into the React frontend, improving reliability and clarity of auction flows for end users.</li>
            <li>Debugged production issues involving data consistency and event timing during high-traffic auctions.</li>
            <li>Worked with product and backend teams to trace data flows, diagnose system bottlenecks, and stabilize core auction functionality.</li>
          </ul>
        </div>
        
        <div className="job">
          <h3>Firefly Integrations – VegaTouch Team</h3>
          <p className="position">Mobile Developer</p>
          <p><a href="https://fireflyint.com/" target="_blank" rel="noopener noreferrer">fireflyint.com</a></p>
          <p className="duration location">Oct 2020 – Feb 2021 | Middlebury, IN</p>
          <p className="tech">Capacitor.js, React, TypeScript</p>
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