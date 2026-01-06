export function Origin() {
  return (
    <section className="section">
      <h2>Origin Story</h2>
      <p className="read-time">2 minute read</p>
      <p>
        I've always been naturally curious. As a kid, I asked too many questions and was never satisfied with surface level answers. I just liked learning. Like any teen, I was into video games. I bought a cheap used PSP and saw online that someone was running Nintendo games on it. Of course I wanted to do the same thing.
      </p>
      <p>
        That's when I learned I needed to install custom firmware. I dove into the research and discovered I had to create something called a Pandora's battery and a Magic Memory Stick. That meant opening up the battery, finding a specific pin on the circuit board, and cutting it. It was a tiny hardware modification that changed the battery's internal data and triggered an alternate boot sequence which let me install the custom firmware.
      </p>
      <p>
        When I finally got it running, the screen lit up with messages from the bootloader. Memory checks, system info, warnings, successes. I thought it was incredible. That moment, seeing the machine reveal its inner workings, sparked my love for software and set me on the path I am on today.
      </p>
      <p>
        From there, I became an active member of the DaedalusX64 Nintendo 64 emulator forums, frequently engaging with the community and sharing quality-of-life improvements. For example, I experimented with adjusting the N64 controller mapping to better suit the PSP layout and made tweaks to the UI, adding alternate themes. This involved exploring the emulator’s menu system and configuration code to propose new options and ways to persist user settings.
      </p>
      <p>
        Making those changes required reading a real production codebase, understanding how input was handled each frame, and rebuilding the emulator to run on actual hardware. Seeing my changes show up in a running emulator was a huge moment for me.
      </p>
      <p>
        Shortly after, I started using tools like NitePR, a homebrew cheat engine that ran alongside games. While playing titles like Medal of Honor, I could pause the game and inspect its memory in real time. I learned how cheats actually worked by searching RAM for values like health or ammo, changing them in game, and narrowing down the exact memory addresses responsible. Once I found them, I could lock or override those values and watch the game react instantly.
      </p>
      <p>
        Through all of this, I realized something fundamental about software. Every program is basically a series of instructions the CPU carries out, manipulating data stored in memory. When I paused a game and watched numbers change, I was seeing the CPU follow instructions that transformed those values and controlled what happened on screen. That insight about instructions acting on memory has stayed with me. I also realized that part of what made it exciting was collaborating with others, sharing ideas, figuring out problems together, and seeing someone build on something I contributed. Working on software with people who were just as into it as I was felt really rewarding, and that’s a big part of why I love software development today.
      </p>
    </section>
  )
}