import React from 'react'
import { ArrowRight } from 'lucide-react'

const floatingDishes = [
  {
    src: '/assets/dish1.png',
    alt: 'Dish 1',
    style: {
      top: '-20px',
      left: '8%',
    },
  },
  {
    src: '/assets/dish2.png',
    alt: 'Dish 2',
    style: {
      bottom: '-40px',
      left: '14%',
    },
  },
  {
    src: '/assets/dish3.png',
    alt: 'Dish 3',
    style: {
      top: '20px',
      right: '8%',
    },
  },
  {
    src: '/assets/dish4.png',
    alt: 'Dish 4',
    style: {
      bottom: '-40px',
      right: '14%',
    },
  },
]

const CTA = () => {
  return (
    <section
      id="CTA"
      className="
        relative
        mt-32 md:mt-44
        w-full
        flex items-center justify-center
      "
      style={{
        backgroundColor: '#173F35',
        minHeight: 460,

        // 👇 Bottom dishes ko section ke bahar visible rakhega
        clipPath: 'inset(-200px 0 -200px 0)',
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2 top-1/2
            w-[500px] h-[500px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#D9A441]/10
            blur-[100px]
          "
        />
      </div>

      {/* Floating Dishes */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingDishes.map((dish) => (
          <img
            key={dish.alt}
            src={dish.src}
            alt={dish.alt}
            className="
              absolute
              object-contain
              drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]
            "
            style={{
              width: 180,
              height: 'auto',
              ...dish.style,
            }}
          />
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-xl px-6 text-center">

        {/* Small Heading */}
        <p
          className="
            mb-4
            text-xs md:text-sm
            uppercase
            tracking-[0.3em]
            font-medium
            text-[#D9A441]
          "
        >
          A Taste Worth Remembering
        </p>

        {/* Main Heading */}
        <h2
          className="
            text-[#F4EBDD]
            text-4xl
            md:text-5xl
            font-medium
            leading-tight
            tracking-tight
          "
        >
          Every Meal Is Made
          <br />

          <span
            className="
              font-serif
              italic
              text-[#D9A441]
            "
          >
            To Be Remembered
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            mx-auto
            max-w-md
            text-sm
            md:text-base
            leading-relaxed
            text-[#F4EBDD]/70
          "
        >
          Join us for fresh ingredients, signature recipes and an
          unforgettable dining experience.
        </p>

        {/* Button */}
        <a
          href="#booking"
          className="
            group
            inline-flex
            items-center
            gap-3
            mt-7
            rounded-full
            bg-[#F4EBDD]
            pl-6
            pr-2
            py-2
            font-medium
            text-[#173F35]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#D9A441]
            hover:text-white
            shadow-lg
          "
        >
          Book Your Table

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#173F35]
              text-[#F4EBDD]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            <ArrowRight size={17} />
          </span>
        </a>
      </div>
    </section>
  )
}

export default CTA