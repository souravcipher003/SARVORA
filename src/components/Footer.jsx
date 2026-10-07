import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Animated from '../components/Animated'
import { quickLinks, socialLinks } from '../data/data'

const openingHours = [
  { day: 'Mon - Fri', time: '11:00 AM - 10:00 PM' },
  { day: 'Saturday', time: '11:00 AM - 11:30 PM' },
  { day: 'Sunday', time: '10:00 AM - 11:00 PM' },
]

const Footer = () => {
  return (
    <footer className="relative mt-44 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">

        {/* Row */}
        <div className="flex flex-wrap gap-10 justify-between pb-10">

          {/* Column 1 - Brand and social */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img src="/assets/logo1.svg" alt="logo" />
              <Animated delay={0.2}>
                <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                  Good food, fresh ingredients, and unforgettable moments —
                  all made with love.
                </p>
              </Animated>
            </Animated>

            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={item.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center transition-all duration-300 hover:bg-[#173F35] hover:text-white hover:border-[#173F35] hover:-translate-y-0.5"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick links */}
          <div>
            <p className="font-medium mb-5">Quick Links</p>

            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-[#D9A441] transition-colors"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 3 - Get in touch */}
          <div>
            <p className="font-medium mb-5">Get In Touch</p>

            <div className="flex flex-col gap-3 text-zinc-600">
              <Animated delay={0.05}>
                <p className="flex items-start gap-2.5">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#D9A441]" />
                  <span>
                    123 Food Street
                    <br />
                 India
                  </span>
                </p>
              </Animated>

              <Animated delay={0.1}>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 hover:text-[#D9A441] transition-colors"
                >
                  <Phone size={18} className="shrink-0 text-[#D9A441]" />
                  +91 98765 43210
                </a>
              </Animated>

              <Animated delay={0.15}>
                <a
                  href="mailto:hello@sarvora.com"
                  className="flex items-center gap-2.5 hover:text-[#D9A441] transition-colors"
                >
                  <Mail size={18} className="shrink-0 text-[#D9A441]" />
                  hello@sarvora.com
                </a>
              </Animated>
            </div>
          </div>

          {/* Column 4 - Opening hours */}
          <div>
            <p className="font-medium mb-5">Opening Hours</p>

            <div className="flex flex-col gap-3 text-zinc-600">
              {openingHours.map((item, index) => (
                <Animated key={item.day} delay={index * 0.05}>
                  <div>
                    <p className="text-[#173F35] font-medium text-sm">
                      {item.day}
                    </p>
                    <p className="text-sm">{item.time}</p>
                  </div>
                </Animated>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
          <p>© 2026 Sarvora Restaurant. All rights reserved.</p>
          <p>Designed By Sourav@Dev</p>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-[#D9A441] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#D9A441] transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer