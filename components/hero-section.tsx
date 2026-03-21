"use client"

import { motion } from "framer-motion"
import { Mouse } from "lucide-react"
import { HeroVideoItem } from "./hero-video-item"

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 30%, rgba(0,255,65,0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 70%, rgba(0,255,65,0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 30%, rgba(0,255,65,0.12) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content - Vertical Stack */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">

        {/* 1. Top Header - Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] uppercase text-foreground">

          </h1>
        </motion.div>

        {/* 2. Hero Media - The "Switch" (Raw vs Graded) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Raw Video - AFCON Campaign */}
            <HeroVideoItem
              videoUrl="https://www.youtube.com/embed/TA2l-sQt2Yw?controls=0&mute=1&autoplay=1&loop=1&playlist=TA2l-sQt2Yw&playsinline=1&modestbranding=1&rel=0&quality=hd"
              title="Raw footage sample"
              label="AFCON Campaign - GOLDBERG"
              isBorderPrimary={false}
              boxShadow="0 0 40px rgba(0,255,65,0.15), 0 0 80px rgba(0,255,65,0.05)"
            />

            {/* Graded Video - AMCE Medical Center */}
            <HeroVideoItem
              videoUrl="https://www.youtube.com/embed/KniEPi2zN5Q&t?controls=0&mute=1&autoplay=1&loop=1&playlist=KniEPi2zN5Q&t&playsinline=1&modestbranding=1&rel=0&quality=hd"
              title="Graded footage sample"
              label="AMCE - MEDICAL CENTER"
              isBorderPrimary={true}
              boxShadow="0 0 40px rgba(0,255,65,0.2), 0 0 80px rgba(0,255,65,0.1)"
            />
          </div>
        </motion.div>

        {/* 3. Messaging Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-3xl mb-12 md:mb-16"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Creative Visual <span className="text-primary">Storyteller</span>
          </h2>

          {/* Service Indicators */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <span className="px-4 py-1.5 rounded-full border border-border text-xs uppercase tracking-wider text-muted-foreground">
              Short-Form Content
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="px-4 py-1.5 rounded-full border border-primary/30 text-xs uppercase tracking-wider text-primary">
              Long-Form Campaigns
            </span>
          </div>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            High-Conversion Video Creator-Editor specializing in high-impact short-form content and comprehensive long-form campaigns.
          </p>
        </motion.div>

        {/* 4. Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all text-center"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>

      {/* 5. Scroll-Down Indicator */}
      <motion.div
        className="relative z-10 flex flex-col items-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground/50">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
