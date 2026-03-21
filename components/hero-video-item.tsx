"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"

interface HeroVideoItemProps {
  videoUrl: string
  title: string
  label: string
  isBorderPrimary?: boolean
  boxShadow?: string
}

export function HeroVideoItem({
  videoUrl,
  title,
  label,
  isBorderPrimary = false,
  boxShadow,
}: HeroVideoItemProps) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      const src = videoRef.current.src
      const baseUrl = src.split("?")[0]
      const params = new URLSearchParams(src.split("?")[1] || "")
      params.set("mute", isMuted ? "0" : "1")
      videoRef.current.src = baseUrl + "?" + params.toString()
    }
  }

  return (
    <div className="relative group">
      <div
        className={`relative aspect-video rounded-xl overflow-hidden border ${
          isBorderPrimary ? "border-primary/30" : "border-border/50"
        }`}
        style={{ boxShadow: boxShadow || "0 0 40px rgba(0,255,65,0.15), 0 0 80px rgba(0,255,65,0.05)" }}
      >
        <iframe
          ref={videoRef}
          src={videoUrl}
          className="absolute inset-0 w-full h-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />

        {/* Mute/Unmute Button - Glassmorphism - Individual for each video */}
        <motion.button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border/50 hover:bg-background/60 hover:border-primary/50 transition-all shadow-lg z-20 group/mute"
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
      </div>

      <p className={`mt-3 text-center text-xs uppercase tracking-widest ${
        isBorderPrimary ? "text-primary" : "text-muted-foreground"
      }`}>
        {label}
      </p>
    </div>
  )
}
