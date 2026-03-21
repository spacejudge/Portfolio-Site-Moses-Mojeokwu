"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

export function ColorGradingSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }, [handleMove])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }, [handleMove])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX)
    }
    const handleEnd = () => setIsDragging(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleEnd)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, handleMove])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">Raw LOG</span>
        <span className="text-sm uppercase tracking-widest text-primary">Finished Grade</span>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-video w-full cursor-ew-resize overflow-hidden rounded-lg border border-border"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Finished Grade (Background - Right side) - YouTube 1080p+ Quality */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/UHc9fwwPvqk?controls=0&mute=1&autoplay=1&loop=1&playlist=UHc9fwwPvqk&playsinline=1&modestbranding=1&rel=0&quality=hd"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: "scale(1.1)" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Color graded footage"
          />
          {/* Label overlay */}
          <div className="absolute bottom-4 right-4 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 pointer-events-none z-10">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Graded</span>
          </div>
        </div>

        {/* Raw LOG (Overlay - Left side) - YouTube 1080p+ Quality */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <iframe
            src="https://www.youtube.com/embed/cOA0_5oZ2BA?controls=0&mute=1&autoplay=1&loop=1&playlist=cOA0_5oZ2BA&playsinline=1&modestbranding=1&rel=0&quality=hd"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: "scale(1.1)" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Raw LOG footage"
          />
          {/* Label overlay */}
          <div className="absolute bottom-4 left-4 bg-muted/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border pointer-events-none z-10">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Raw</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle grip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary rounded-full" />
              <div className="w-0.5 h-4 bg-primary rounded-full" />
            </div>
          </div>

          {/* Top and bottom indicators */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-primary" />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Drag the slider to see the color grading transformation
      </p>
    </motion.div>
  )
}
