"use client"

import { motion } from "framer-motion"
import { Zap, Film, TrendingUp, Target } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "10M+", label: "Views Generated" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Brands Served" },
]

const highlights = [
  { icon: Target, text: "High-Conversion Content" },
  { icon: TrendingUp, text: "Data-Driven Retention" },
  { icon: Film, text: "Cinematic Quality" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card/50">
              {/* Profile Image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moses%20Mojeokwu%20about%20image-1GwhHAEovYiVakwq98h2lq1nTxCmeB.jpg"
                alt="Moses Mojeokwu - Creative Visual Storyteller"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Zap className="w-3 h-3 text-emerald-950" />
                <span className="text-xs font-medium text-primary">Available for Work</span>
              </div>

              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-30" style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.03) 3px, rgba(0,255,65,0.03) 6px)"
              }} />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 grid grid-cols-2 gap-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">About Me</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-balance">
              Moses <span className="text-primary">Mojeokwu</span>
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">Creative Visual Storyteller & High-Conversion Video Creator-Editor</p>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                I am a creative visual storyteller and high-conversion video creator-editor, specializing in both
                <span className="text-foreground font-medium"> high-impact short-form content</span> and
                comprehensive <span className="text-foreground font-medium">long-form campaigns</span>.
              </p>
              <p className="text-pretty">
                I bridge the gap between <span className="text-primary font-medium">aesthetic cinematic quality</span> and
                <span className="text-primary font-medium"> data-driven retention</span>, helping brands and creators turn
                viewers into loyal followers.
              </p>
              <p className="text-pretty">
                Every project is an opportunity to combine creative vision with strategic thinking,
                ensuring your content not only looks stunning but performs exceptionally.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,65,0.15)" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors text-center">
                Start a Project
              </a>
              <a href="#work" className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-colors text-center">
                View Full Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
