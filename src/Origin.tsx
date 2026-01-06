export function Origin() {
  return (
    <section className="section">
      <h2>Origin Story</h2>
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
        From there, I went even deeper. I started using tools like NitePR, a homebrew cheat engine that ran alongside games. While playing titles like Medal of Honor, I could pause the game and inspect its memory in real time. I learned how cheats actually worked by searching RAM for values like health or ammo, changing them in game, and narrowing down the exact memory addresses responsible. Once I found them, I could lock or override those values and watch the game react instantly.
      </p>
      <p>
        That process taught me how software really works at a low level. Data lives somewhere. Change the data and you change the behavior. That realization stuck with me. What started as curiosity and messing around with a PSP turned into a genuine passion for understanding systems and building software.
      </p>
      <p>
        Eventually I started contributing directly to open source projects. I did some minor work on the DaedalusX64 Nintendo 64 emulator for PSP. The N64 controller is very different from the PSP layout, so I worked on editing the control scheme to make games feel more natural and playable on the PSP. I also added alternate UI themes, which meant digging into the emulator's menu system and configuration code to expose new options and persist user settings.
      </p>
      <p>
        Making those changes required reading a real production codebase, understanding how input was handled each frame, and rebuilding the emulator to run on actual hardware. Seeing my changes show up in a running emulator was a huge moment for me.
      </p>
    </section>
  )
}