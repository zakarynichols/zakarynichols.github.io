// import { DiGo, DiReact, DiPostgresql, DiDocker, DiNginx, DiLinux, DiGitBranch, DiNodejs } from "react-icons/di";
// import { SiTypescript, SiGnubash } from "react-icons/si";

export function Landing() {
  return (
    <section className="section">
      <h1>I like programming.</h1>
      <p>
        I've been doing it for a long time, often just because I'm curious. Sometimes it's a job. Sometimes it's just for fun. Either way, I'd be doing it.
      </p>      
      {/* <div className="tech-icons">
        <h3>Technologies & Tools</h3>
        <div className="icons-grid">
          <div className="tech-icon" title="Go">
            <DiGo size={48} />
            <span>Go</span>
          </div>
          <div className="tech-icon" title="React">
            <DiReact size={48} />
            <span>React</span>
          </div>
          <div className="tech-icon" title="TypeScript">
            <SiTypescript size={48} />
            <span>TypeScript</span>
          </div>
          <div className="tech-icon" title="PostgreSQL">
            <DiPostgresql size={48} />
            <span>PostgreSQL</span>
          </div>
          <div className="tech-icon" title="Docker">
            <DiDocker size={48} />
            <span>Docker</span>
          </div>
          <div className="tech-icon" title="Nginx">
            <DiNginx size={48} />
            <span>Nginx</span>
          </div>
          <div className="tech-icon" title="Linux">
            <DiLinux size={48} />
            <span>Linux</span>
          </div>
          <div className="tech-icon" title="Git">
            <DiGitBranch size={48} />
            <span>Git</span>
          </div>
          <div className="tech-icon" title="Node.js">
            <DiNodejs size={48} />
            <span>Node.js</span>
          </div>
          <div className="tech-icon" title="Bash">
            <SiGnubash size={48} />
            <span>Bash</span>
          </div>
        </div>
      </div> */}
      
      <h2>What I'm Working On</h2>
      <p>
        I'm building <a href="https://fullbarbell.com" target="_blank" rel="noopener noreferrer">FULL Barbell</a>, an unopinionated analytics platform designed specifically for intermediate and advanced strength athletes. Unlike typical strength training apps that tell you how to train, this is built on the understanding that experienced lifters already know their programs and methods. Instead, it serves as a comprehensive data analysis tool that reveals the patterns and insights that matter most for serious strength athletes.
      </p>
      <p>
        The application focuses on detailed analytics to prevent injury and ensure consistent linear progression. By tracking every lift, session, and recovery metric with surgical precision, it helps identify warning signs before they become injuries, validates that your training is actually working, and provides the data-driven confidence that experienced lifters need to make informed decisions about their programming.
      </p>
      
      <h2>Learning Distributed Systems</h2>
      <p>
        Lately I've been drawn to distributed systems. When you build full stack applications on a single server, you reach the monolithic deployment phase. Your app works end to end, but it's limited by that server's resources: CPU, memory, disk, and network. As traffic grows, a single server becomes a bottleneck. The natural next step is horizontal scaling, running your app across multiple machines behind a load balancer to distribute requests. I've been spending more time with the Go ecosystem and infrastructure tools like Docker and Kubernetes. There's real satisfaction in figuring out service communication, failure handling, and scaling beyond what one computer can manage.
      </p>
      <p>
        I'm approaching this as a long-term learning goal rather than something to master overnight. The complexity of distributed systems is real, and I'm enjoying the process of understanding concepts like consistency, fault tolerance, and coordination. My background building deployed applications gives me a solid foundation to build on, but I'm interested in diving deeper into the infrastructure side of things. It's less about chasing buzzwords and more about becoming the kind of programmer who can build reliable systems that actually work at scale.
      </p>

    </section>
  )
}