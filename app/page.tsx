import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ColorGradingSlider } from "@/components/color-grading-slider"
import { MotionBentoGrid } from "@/components/motion-bento-grid"
import { VideoGallery } from "@/components/video-gallery"
import { TechMarquee } from "@/components/tech-marquee"
import { ProcessTimeline } from "@/components/process-timeline"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero - The Switch */}
      <HeroSection />
      
      {/* Color Grading Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">Color Science</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance">The Grade</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
              From flat LOG footage to cinematic masterpiece. See the transformation in real-time.
            </p>
          </div>
          <ColorGradingSlider />
        </div>
      </section>

      {/* Motion Graphics Bento Grid */}
      <div id="work">
        <MotionBentoGrid />
      </div>

      {/* Dual-Format Video Gallery */}
      <VideoGallery />

      {/* Technical Marquee */}
      <TechMarquee />

      {/* Process Timeline */}
      <div id="process">
        <ProcessTimeline />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
