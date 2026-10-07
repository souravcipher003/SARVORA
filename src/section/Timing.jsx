import React from 'react'
import Animated from '../components/Animated'
import { Clock3 } from 'lucide-react'

const Timing = () => {
  const timingData = [
    {
      day: 'Monday',
      time: '10:00 AM - 10:00 PM',
    },
    {
      day: 'Tuesday',
      time: '10:00 AM - 10:00 PM',
    },
    {
      day: 'Wednesday',
      time: '10:00 AM - 10:00 PM',
    },
    {
      day: 'Thursday',
      time: 'Closed',
    },
    {
      day: 'Friday',
      time: '10:00 AM - 10:00 PM',
    },
    {
      day: 'Saturday',
      time: '10:00 AM - 10:00 PM',
    },
    {
      day: 'Sunday',
      time: '10:00 AM - 10:00 PM',
    },
  ]

  return (
    <section
      id="timing"
      className="px-6 mt-44 pb-20 overflow-hidden"
    >
      <Animated
        scale={0.9}
        y={30}
        className="
          relative
          w-full
          max-w-6xl
          min-h-[650px]
          rounded-[2.5rem]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          md:justify-start
          px-5
          md:px-12
          lg:px-16
          overflow-hidden
          mx-auto
          bg-[url('/assets/time.avif')]
        "
      >

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Background Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/60
            via-black/25
            to-transparent
          "
        />

        {/* Glass Timing Card */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-md
            rounded-[2rem]
            bg-black/35
            backdrop-blur-xl
            border
            border-white/20
            shadow-2xl
            shadow-black/30
            p-7
            md:p-9
          "
        >

          {/* Header */}
          <Animated delay={0.2}>
            <div className="flex items-center gap-4 mb-8">

              {/* Clock Icon */}
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#A65D3A]
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  shadow-black/20
                "
              >
                <Clock3
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <p
                  className="
                    text-white/60
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    mb-1
                  "
                >
                  Restaurant Hours
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Opening Time
                </h3>
              </div>

            </div>
          </Animated>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-2" />

          {/* Timing List */}
          <div>
            {timingData.map((item, index) => (
              <Animated
                key={index}
                delay={0.3 + index * 0.12}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-5
                  py-4
                  border-b
                  border-white/10
                  last:border-b-0
                  transition-all
                  duration-300
                  hover:px-2
                "
              >

                {/* Day */}
                <div className="flex items-center gap-3">

                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#A65D3A]
                      group-hover:scale-125
                      transition-transform
                      duration-300
                    "
                  />

                  <p className="text-[15px] font-semibold text-white">
                    {item.day}
                  </p>

                </div>

                {/* Time */}
                <p
                  className={`
                    text-sm
                    font-medium
                    whitespace-nowrap
                    ${
                      item.time === 'Closed'
                        ? 'text-red-300'
                        : 'text-white'
                    }
                  `}
                >
                  {item.time}
                </p>

              </Animated>
            ))}
          </div>

          {/* Bottom Status */}
          <Animated delay={1.2}>
            <div
              className="
                mt-7
                pt-5
                border-t
                border-white/20
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div className="flex items-center gap-2">

                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-50
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </span>

                <span className="text-sm font-medium text-white/80">
                  Open for reservations
                </span>

              </div>

              <span className="text-xs text-white/50">
                Walk-ins welcome
              </span>

            </div>
          </Animated>

        </div>
      </Animated>
    </section>
  )
}

export default Timing
