import React from 'react'
import Animated from '../components/Animated'
import { bookingTestimonial } from '../data/data'
import { Star, ArrowRight } from 'lucide-react'

const BookingProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose your date',
      description:
        'Select your preferred date and find a time that works perfectly for you.',
    },
    {
      number: '02',
      title: 'Pick a time',
      description:
        'Choose an available time slot and let us know how many guests are joining.',
    },
    {
      number: '03',
      title: 'Enjoy your experience',
      description:
        'That’s it! Your table is reserved. Just arrive and enjoy your meal with us.',
    },
  ]

  return (
    <section
      id="booking-process"
      className="px-6 mt-32 md:mt-44 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================
            TOP HEADING
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Animated delay={0.2}>
            <p className="text-[#A65D3A] font-medium uppercase tracking-[0.18em] text-sm mb-4">
              Table Reservation Process
            </p>
          </Animated>

          <Animated delay={0.3}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.08]">
              Reserve your table in three simple steps
            </h2>
          </Animated>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">

          {/* =========================
              LEFT — STEPS
          ========================== */}
          <div className="space-y-8">

            {steps.map((step, index) => (
              <Animated
                key={step.number}
                x={-30}
                y={0}
                delay={0.4 + index * 0.2}
              >
                <div className="group flex gap-5">

                  {/* Number */}
                  <div
                    className="
                      flex-shrink-0
                      w-12
                      h-12
                      rounded-full
                      bg-[#F4E9E2]
                      text-[#A65D3A]
                      flex
                      items-center
                      justify-center
                      font-semibold
                      transition-all
                      duration-300
                      group-hover:bg-[#A65D3A]
                      group-hover:text-white
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pb-8 border-b border-zinc-200 flex-1">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-zinc-500 leading-7 max-w-lg">
                      {step.description}
                    </p>
                  </div>

                </div>
              </Animated>
            ))}

            {/* CTA */}
            <Animated x={-30} y={0} delay={1.1}>
              <button
                className="
                  mt-2
                  inline-flex
                  items-center
                  gap-3
                  bg-[#A65D3A]
                  hover:bg-[#8F4F31]
                  text-white
                  px-7
                  py-3.5
                  rounded-full
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-[#A65D3A]/20
                "
              >
                Reserve a Table

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Animated>

          </div>

          {/* =========================
              RIGHT — TESTIMONIAL
          ========================== */}
          <Animated x={40} y={0} delay={0.5}>
            <div
              className="
                relative
                bg-[#F8F3EF]
                rounded-[2rem]
                p-8
                md:p-10
                lg:p-12
                overflow-hidden
              "
            >

              {/* Decorative Quote */}
              <div
                className="
                  absolute
                  -top-5
                  -right-1
                  text-[160px]
                  leading-none
                  font-serif
                  text-[#A65D3A]/10
                  pointer-events-none
                "
              >
                “
              </div>

              {/* Small Label */}
              <Animated delay={0.6}>
                <p className="relative text-[#A65D3A] text-sm font-medium uppercase tracking-widest mb-6">
                  Guest Experience
                </p>
              </Animated>

              {/* Stars */}
              <Animated delay={0.7}>
                <div className="relative flex gap-1 mb-6">
                  {[...Array(bookingTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-[#A65D3A] text-[#A65D3A]"
                    />
                  ))}
                </div>
              </Animated>

              {/* Quote */}
              <Animated delay={0.8}>
                <p className="relative text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed mb-8">
                  "{bookingTestimonial.quote}"
                </p>
              </Animated>

              {/* =========================
                  GUEST INFO
              ========================== */}
              <Animated
                delay={0.9}
                className="relative flex items-center gap-4 pt-6 border-t border-zinc-200"
              >

                {/* Guest Icon / Image */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#F4E9E2]
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    overflow-hidden
                  "
                >
                  <img
                    src={bookingTestimonial.authorImg}
                    alt="Happy Guest"
                    className="
                      w-7
                      h-7
                      object-contain
                    "
                  />
                </div>

                {/* Guest Details */}
                <div>
                  <p className="font-semibold text-zinc-900">
                   Emma Wilson
                  </p>

                  <p className="text-sm text-zinc-500">
                    Verified dining experience
                  </p>
                </div>

              </Animated>

            </div>
          </Animated>

        </div>
      </div>
    </section>
  )
}

export default BookingProcess
