"use client"

import { motion } from "framer-motion"

const tools = [
  { name: "Adobe Premiere Pro", category: "Editing" },
  { name: "After Effects", category: "Motion" },
  { name: "DaVinci Resolve", category: "Color" },
  { name: "Cinema 4D", category: "3D" },
  { name: "Photoshop", category: "Design" },
  { name: "Illustrator", category: "Graphics" },
  { name: "Audition", category: "Audio" },
  { name: "Blender", category: "3D" },
  { name: "RED Camera", category: "Gear" },
  { name: "Blackmagic", category: "Gear" },
  { name: "DJI Ronin", category: "Gear" },
  { name: "ARRI", category: "Gear" },
]

const skills = [
  "Color Grading",
  "Motion Design",
  "Sound Design",
  "VFX Compositing",
  "3D Animation",
  "Rhythmic Editing",
  "Narrative Structure",
  "Visual Narrative Structure",
]

export function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-card/30">
      {/* Tools Marquee */}
      <div className="relative mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              <span className="text-[10px] uppercase tracking-wider text-primary/60">{tool.category}</span>
              <span className="font-medium">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Marquee (reverse direction) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      {/* DaVinci Resolve Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-2xl border border-primary/30 bg-primary/5 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-primary">Certified Color Specialist</h3>
            <p className="text-sm text-muted-foreground">DaVinci Resolve • Advanced Color Grading & HDR Workflows</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
