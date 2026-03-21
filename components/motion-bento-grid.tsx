"use client"

import { motion } from "framer-motion"
import { Type, Layers, Monitor, Sparkles } from "lucide-react"

const motionItems = [
  {
    id: 1,
    title: "CREATIVE PROCESS",
    description: "Visual Edit, Defining the audience experience",
    icon: Sparkles,
    size: "large",
    videoUrl: "https://www.youtube.com/embed/cLODBodsyC0?controls=0&mute=1&autoplay=1&loop=1&playlist=cLODBodsyC0&playsinline=1"
  },
  {
    id: 2,
    title: "Color Grading Mastery",
    description: "Professional color correction",
    icon: Layers,
    size: "medium",
    videoUrl: "https://www.youtube.com/embed/UHc9fwwPvqk?controls=0&mute=1&autoplay=1&loop=1&playlist=UHc9fwwPvqk&playsinline=1"
  },
  {
    id: 3,
    title: "Kinetic Typography",
    description: "Text in motion",
    icon: Type,
    size: "medium",
    videoUrl: null
  },
  {
    id: 4,
    title: "UI/Screen Animations",
    description: "Professional screen recordings",
    icon: Monitor,
    size: "small",
    videoUrl: null
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 }
  }
}

export function MotionBentoGrid() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Motion Design</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance">Dynamic Motion</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            From kinetic typography to seamless transitions. Every frame is crafted with precision and energy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {motionItems.map((item) => {
            const Icon = item.icon
            const isLarge = item.size === "large"
            const isMedium = item.size === "medium"

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm
                  hover:border-primary/50 transition-colors cursor-pointer
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isMedium ? "md:row-span-2" : ""}
                `}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Video or placeholder area */}
                <div className="absolute inset-0 pointer-events-none">
                  {item.videoUrl ? (
                    <iframe
                      src={item.videoUrl.includes("?") ? item.videoUrl + "&modestbranding=1&rel=0&quality=hd" : item.videoUrl + "?controls=0&mute=1&autoplay=1&loop=1&playlist=" + item.videoUrl.split("/embed/")[1].split("?")[0] + "&playsinline=1&modestbranding=1&rel=0&quality=hd"}
                      className="absolute inset-0 w-full h-full"
                      style={{ transform: "scale(1.2)" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={item.title}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
                      <Icon className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  )}
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/20 transition-colors backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="absolute inset-0" style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)"
                  }} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
