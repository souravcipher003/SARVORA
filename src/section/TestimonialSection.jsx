import React from 'react'
import Animated from '../components/Animated'
import { testimonials } from '../data/data'
import { StarIcon } from 'lucide-react'

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="px-auto mt-44">
      <div className="text-center">

        {/* Chef's Choice */}
        <Animated>
          <p className="text-orange-500 font-medium uppercase tracking-wide mb-2">
            A Taste Worth Remembering
          </p>
        </Animated>

        {/* Heading */}
        <Animated>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            What Our Guests Say
          </h2>
        </Animated>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-12">
          {testimonials.map((item, index) => (
            <Animated
              key={index}
              y={80}
              delay={index * 0.1}
              className="border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
            >
              <div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-zinc-600 leading-relaxed mb-6">
                  {item.review}
                </p>

              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-11 rounded-full object-cover shrink-0"
                />

                <div>
                  <p className="font-medium leading-tight mb-0.5">
                    {item.name}
                  </p>

                  <p className="text-zinc-600">
                    {item.location}
                  </p>
                </div>
              </div>

            </Animated>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialSection
