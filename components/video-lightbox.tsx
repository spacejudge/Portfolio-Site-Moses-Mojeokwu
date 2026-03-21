"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import { useEffect } from "react"

interface VideoLightboxProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
  platform: string
}

export function VideoLightbox({ isOpen, onClose, videoUrl, title, platform }: VideoLightboxProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Extract TikTok video ID from URL
  const getTikTokEmbedUrl = (url: string) => {
    const match = url.match(/video\/(\d+)/)
    if (match) {
      return `https://www.tiktok.com/embed/v2/${match[1]}`
    }
    return url
  }

  // Convert YouTube Shorts to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    // Handle youtube.com/shorts/ID format
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
    if (shortsMatch) {
      return `https://www.youtube.com/embed/${shortsMatch[1]}?modestbranding=1&rel=0&quality=hd`
    }
    // Handle youtu.be/ID format
    const youtubeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?modestbranding=1&rel=0&quality=hd`
    }
    // Handle youtube.com/watch?v=ID format
    const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}?modestbranding=1&rel=0&quality=hd`
    }
    return url
  }

  // Transform Instagram URLs to embed format
  const getInstagramEmbedUrl = (url: string) => {
    // Handle Instagram URLs by appending /embed/ if not already present
    if (url.includes("instagram.com")) {
      // Remove trailing slash if present
      let cleanUrl = url.endsWith("/") ? url.slice(0, -1) : url
      // Add /embed if not already there
      if (!cleanUrl.includes("/embed")) {
        cleanUrl = cleanUrl + "/embed/"
      }
      return cleanUrl
    }
    return url
  }

  // Determine embed URL and type based on platform
  let embedUrl = videoUrl
  let isInstagram = false
  let isYouTube = false
  
  if (videoUrl.includes("instagram.com")) {
    embedUrl = getInstagramEmbedUrl(videoUrl)
    isInstagram = true
  } else if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    embedUrl = getYouTubeEmbedUrl(videoUrl)
    isYouTube = true
  } else if (platform === "TikTok") {
    embedUrl = getTikTokEmbedUrl(videoUrl)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-primary">{platform}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                  aria-label="Open original"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Container - Tall and centered for mobile-native appearance */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-card" style={{ aspectRatio: "9/16" }}>
              {isInstagram ? (
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="autoplay; encrypted-media"
                  style={{ display: "block" }}
                />
              ) : isYouTube ? (
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              ) : (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Fallback link for Instagram */}
            {isInstagram && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs text-primary hover:text-primary/80 flex items-center gap-2 justify-center transition-colors"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
