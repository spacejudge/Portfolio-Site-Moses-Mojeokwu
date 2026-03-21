"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Music2, Linkedin, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/diroptix", label: "Instagram" },
  { icon: Music2, href: "https://www.tiktok.com/@diroptix", label: "TikTok" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/directoroptix", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">Let&apos;s Create</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-balance">
              Ready to make something
              <span className="text-primary"> extraordinary</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md text-pretty">
              Whether you need viral social content or cinematic brand films,
              let&apos;s bring your vision to life with the creative juice and the vibe your content truly deserves.
            </p>

            <motion.a
              href="mailto:diroptix@gmail.com"
              className="inline-flex items-center gap-3 mt-8 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Email me at</span>
                <div className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center gap-1">
                  diroptix@gmail.com
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right - Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="text-muted-foreground mb-3">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-primary transition-colors">Video Editing</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Motion Graphics</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Color Grading</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Content Strategy</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-muted-foreground mb-3">Platforms</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Instagram/Reels</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Commercials</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Moses Mojeokwu. Lag, Nig.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <span className="text-primary">●</span>
            <span>Available for projects</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
