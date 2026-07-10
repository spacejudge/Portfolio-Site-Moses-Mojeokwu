"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import { VideoLightbox } from "./video-lightbox"
import { HorizontalVideoItem } from "./horizontal-video-item"

const verticalVideos = [
  {
    id: 1,
    title: "YouTube Africa",
    platform: "Google - IWD",
    url: "https://youtube.com/shorts/pPqObl3pv6Q?feature=share",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/ruth%20kadiri.jpg"
  },
  {
    id: 2,
    title: "Sony Alpha",
    platform: "Creators Campaign",
    url: "https://youtube.com/shorts/vRXRWufBy_U?feature=share",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/sony.jpg"
  },
  {
    id: 3,
    title: "Akuna Matata",
    platform: "Seasoned Funfair",
    url: "https://youtube.com/shorts/fV6rPW7BAs8?feature=share",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/maltina.jpg"
  },
  {
    id: 4,
    title: "AFCON CAMPAIGN",
    platform: "GOLDBERG",
    url: "https://youtube.com/shorts/RB60h1hw31I?feature=share",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/607121695_772138455207162_7213950199459552819_n.jpg"
  },
  {
    id: 5,
    title: "Da Light",
    platform: "Summer",
    url: "https://youtu.be/ZjzS9YV-GxU",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/bimmy.jpg"
  },
  {
    id: 6,
    title: "Shaggi Camapaign Video",
    platform: "UCG SOCIALS",
    url: "https://youtube.com/shorts/1ucOhEiNhTw?feature=share",
    thumbnail: "https://69be76bf4958986cce4f2330.imgix.net/SHAGGI.jpg"
  },
]

const horizontalVideos = [
  {
    id: 1,
    title: "Commercial Campaign",
    type: "Commercial",
    duration: "Full",
    vimeoUrl: "https://player.vimeo.com/video/472914950?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=hd"
  },
  {
    id: 2,
    title: "Cinematic Documentary",
    type: "Documentary",
    duration: "Full",
    vimeoUrl: "https://player.vimeo.com/video/402129951?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=hd"
  },
  {
    id: 3,
    title: "Tech & Commerce",
    type: "Startup",
    duration: "Full",
    vimeoUrl: "https://player.vimeo.com/video/380089781?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=hd"
  },
  {
    id: 4,
    title: "FMCG",
    type: "Showcase",
    duration: "Full",
    vimeoUrl: "https://player.vimeo.com/video/888822688?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=hd"
  },
]

export function VideoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<typeof verticalVideos[0] | null>(null)

  const openLightbox = (video: typeof verticalVideos[0]) => {
    setSelectedVideo(video)
    setLightboxOpen(true)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Portfolio</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance">Dual-Format Gallery</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            From viral shorts to cinematic features. Optimized for every platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vertical Videos (9:16) - TikTok */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-primary rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">Vertical Content</h3>
                <p className="text-sm text-muted-foreground">9:16 - Reels / TikTok / Shorts</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {verticalVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-card/50 hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => openLightbox(video)}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Thumbnail background */}
                  <div className="absolute inset-0">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30 z-10">
                    <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Play className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors fill-current" />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <span className="text-xs uppercase tracking-wider text-primary">{video.platform}</span>
                    <h4 className="font-medium text-sm mt-1">{video.title}</h4>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Horizontal Videos (16:9) - Vimeo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-2 bg-primary rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">Horizontal Content</h3>
                <p className="text-sm text-muted-foreground">16:9 - YouTube / Documentaries / Commercials</p>
              </div>
            </div>

            <div className="space-y-4">
              {horizontalVideos.map((video, index) => (
                <HorizontalVideoItem
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  type={video.type}
                  duration={video.duration}
                  vimeoUrl={video.vimeoUrl}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for TikTok videos */}
      {selectedVideo && (
        <VideoLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          platform={selectedVideo.platform}
        />
      )}
    </section>
  )
}
