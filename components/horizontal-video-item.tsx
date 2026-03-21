"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"

interface HorizontalVideoItemProps {
  id: number
  title: string
  type: string
  duration: string
  vimeoUrl: string
  index: number
}

export function HorizontalVideoItem({
  id,
  title,
  type,
  duration,
  vimeoUrl,
  index,
}: HorizontalVideoItemProps) {
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)

    // Toggle mute by updating the iframe URL
    if (iframeRef.current) {
      const src = iframeRef.current.src
      const baseUrl = src.split("?")[0]
      const params = new URLSearchParams(src.split("?")[1] || "")

      // Update muted parameter
      params.set("muted", isMuted ? "0" : "1")

      // Reconstruct and update URL
      iframeRef.current.src = baseUrl + "?" + params.toString()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card/50 hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.02 }}
    >
      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-[8%] bg-background z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-background z-20" />

      {/* Vimeo embed - Clean Feed with pointer-events none */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          src={vimeoUrl}
          className="absolute inset-0 w-full h-full"
          style={{ transform: "scale(1.1)" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent z-10" />
      <div className="absolute bottom-[12%] left-0 right-0 px-6 z-30 flex items-end justify-between pointer-events-none">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary">{type}</span>
          <h4 className="font-medium text-lg">{title}</h4>
        </div>
        <span className="text-sm text-muted-foreground font-mono">{duration}</span>
      </div>

      {/* Mute/Unmute Button - Individual Control */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-[12%] right-6 z-40 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border/50 hover:bg-background/60 hover:border-primary/50 transition-all group/mute"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-muted-foreground group-hover/mute:text-primary transition-colors" />
        ) : (
          <Volume2 className="w-4 h-4 text-primary transition-colors" />
        )}
      </motion.button>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
    </motion.div>
  )
}
