import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-20 w-full bg-white shadow-sm">

      <div className="flex items-center justify-between px-6 py-0.5 mx-auto max-w-7xl">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/assets/logo1.svg"
            alt="Sarvora Restaurant"
            className="w-[170px] sm:w-[190px] md:w-[210px] h-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-medium hover:text-[oklch(0.41_0.11_50.38)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Book Table Button */}
        <a
          href="#booking-process"
          className="hidden md:block bg-[oklch(0.41_0.11_50.38)] hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
        >
          Book a table
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-zinc-800 text-white p-2 rounded-md"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 bg-zinc-800 text-white p-2 rounded-md"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Book Button */}
          <a
            href="#booking-process"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            Book a table
          </a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
