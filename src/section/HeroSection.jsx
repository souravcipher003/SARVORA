import React, { useEffect } from 'react'
import { heroAnimation } from '../animate'

const Avatars = [
  '/assets/user-1.jpeg',
  '/assets/user-2.jpeg',
  '/assets/user-3.jpeg',
  '/assets/user-4.jpeg',
]

const HeroSection = () => {
  useEffect(() => {
    heroAnimation()
  }, [])

  return (
    <section
      className="
        relative
        min-h-screen
        bg-[url('/assets/herosec.png')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        lg:justify-end
        px-6
        pt-28
        pb-16
        lg:pr-[7%]
        overflow-hidden
      "
    >
      {/* Overlay: light fade from the right so text stays readable and the bowl stays clear */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 75%)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-xl text-center lg:text-left">

        {/* Welcome */}
        <p className="hero-animate mb-4 text-sm md:text-base uppercase tracking-[0.3em] font-medium text-[#173F35]">
          Welcome to Sarvora
        </p>

        {/* Heading */}
        <h1 className="hero-animate text-5xl md:text-6xl xl:text-7xl font-serif font-semibold leading-[1.05] text-zinc-900">
          Taste the
          <br />
          <span className="text-orange-500">Extraordinary</span>
        </h1>

        {/* Description */}
        <p className="hero-animate mt-6 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-zinc-800 leading-relaxed">
          Authentic flavors, carefully crafted dishes, and a dining
          experience made to be remembered.
        </p>

        {/* Buttons */}
        <div className="hero-animate mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href="#dishes"
            className="
              bg-[#173F35]
              hover:bg-[#0f2e26]
              text-white
              px-7
              py-3.5
              rounded-full
              font-medium
              shadow-lg
              transition
              duration-300
              hover:-translate-y-0.5
            "
          >
            Explore our menu
          </a>

          <a
            href="#about"
            className="
              border
              border-[#173F35]
              text-[#173F35]
              bg-white/50
              backdrop-blur-sm
              hover:bg-[#173F35]
              hover:text-white
              px-7
              py-3.5
              rounded-full
              font-medium
              transition
              duration-300
            "
          >
            Our story
          </a>
        </div>

        {/* Guest rating */}
        <div className="hero-animate mt-10 flex items-center justify-center lg:justify-start gap-4">
          {/* Avatars */}
          <div className="flex -space-x-3">
            {Avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Guest ${i + 1}`}
                className="
                  size-10
                  object-cover
                  rounded-full
                  border-2
                  border-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:z-10
                "
              />
            ))}
          </div>

          {/* Rating */}
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-zinc-900">4.8/5</span>
              <span className="text-orange-500 text-sm tracking-wide">★★★★★</span>
            </div>
            <p className="text-sm text-zinc-600">10,000+ reviews</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
