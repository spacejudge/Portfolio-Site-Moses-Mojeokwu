"use client"

import { motion } from "framer-motion"
import { FileText, Film, Palette, Wand2, Sparkles, CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Narrative Architecture & Culling",
    description: "More than just cutting. I dive deep into your raw footage to identify the "hero" moments that align with your brand voice. By stripping away the noise, I build a narrative framework that hooks the audience from the first frame.",
    icon: FileText,
    color: "from-primary/20 to-primary/5"
  },
  {
    id: 2,
    title: "Rhythmic Assembly",
    description: "This is where the story takes shape. I map out transitions, pacing, and shot sequences to ensure a rhythmic flow. Whether it’s high-energy Brazilian flair or a slow-burn cinematic build, the pacing is intentional.",
    icon: Film,
    color: "from-primary/25 to-primary/10"
  },
  {
    id: 3,
    title: "Color Grading",
    description: "I transform flat LOG footage into a cinematic experience using Davinci Resolve Studio. From correcting skin tones to crafting a bespoke "look, " I ensure the visual mood resonates with your target audience.",
    icon: Palette,
    color: "from-primary/30 to-primary/15"
  },
  {
    id: 4,
    title: "Motion Design",
    description: "Adding kinetic typography, transitions, and VFX that move to the beat. Brazilian energy, global polish.",
    icon: Wand2,
    color: "from-primary/35 to-primary/20"
  },
  {
    id: 5,
    title: "Final Polish",
    description: "Sound design, audio mixing, and final delivery. Optimized exports for every platform.",
    icon: Sparkles,
    color: "from-primary/40 to-primary/25"
  }
]

export function ProcessTimeline() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Workflow</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance">The Process</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            A strategic roadmap from concept to delivery. Every step optimized for impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:-translate-x-px" />

          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex items-center gap-6 mb-12 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${step.color} backdrop-blur-sm hover:border-primary/50 transition-colors`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-primary/60">0{step.id}</span>
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            )
          })}

          {/* Final delivery marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary bg-primary/10">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Ready for Launch</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
