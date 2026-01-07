export function Landing() {
  return (
    <section className="section">
      <h1>I like software.</h1>
      <p>
        I enjoy learning how systems work and building things with code.
      </p>
      <p>
        I've been doing it for a long time, often just because I'm curious.
      </p>
      <p>
        Sometimes it's a job. Sometimes it's just for fun. Either way, I'd be doing it.
      </p>
      
      <h2>What I'm Working On</h2>
      <p>
        I'm building <a href="https://fullbarbell.com" target="_blank" rel="noopener noreferrer">FULL Barbell</a>, a comprehensive workout tracking application that combines my passions for lifting and complex software. It's a full stack system with Go backend API using clean architecture patterns, React 19 frontend with TypeScript, PostgreSQL 15 database, and production deployment with Docker containerization. The infrastructure includes Nginx reverse proxy with SSL termination and rate limiting, Auth0 authentication, database migrations, and CI/CD deployment scripts.
      </p>
      <p>
        It's been incredibly rewarding to maintain and handle this entire system from development to production. Being able to understand and manage every layer, from the database schema and API design to the deployment scripts and SSL certificates, gives me a real sense of pride and confidence in what I've built.
      </p>
      
      <h2>How I'm Learning</h2>
      <p>
        I'm working to become a better software developer by understanding systems from the ground up. I've been writing C programs and using gdb to step through every single instruction and examine what's happening. I compile with <code>gcc -g -O0 program.c</code> then run <code>gdb ./a.out</code>, set a breakpoint with <code>break main</code>, start with <code>run</code>, and step through each instruction with <code>stepi</code> while examining everything manually. After each instruction I check the instruction pointer, stack pointer, base pointer, examine stack memory, and inspect local variables to verify exactly what changed.
      </p>
      <p>
        I'm also diving deep into Linux internals because I got tired of treating containers like magic. I'm learning about namespaces, cgroups, chroot, and how the kernel actually isolates processes. It's fascinating to see how Docker isn't really doing anything mysterious; it's just cleverly using Linux features that have been around for years. Understanding how PID namespaces give processes their own view of process IDs, how network namespaces create isolated network stacks, and how cgroups limit resource usage makes the whole container ecosystem click into place. It's satisfying when abstract concepts finally connect to concrete implementation details.
      </p>
      <p>
        Both are driven by genuine curiosity, one about solving problems in a domain I love, the other about understanding how systems work fundamentally.
      </p>
    </section>
  )
}