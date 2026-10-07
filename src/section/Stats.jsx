import React from 'react'
import { statsData } from '../data/data'
import Animated from '../components/Animated'

const Stats = () => {
  return (
    <section id="stats" className="px-6 mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-25 max-w-7xl mx-auto">

        {statsData.map((item, index) => (
          <Animated
            key={index}
            delay={index * 0.2}
            className="group flex flex-col items-center text-center"
          >
            <span className="text-5xl md:text-6xl font-serif font-bold text-brown-500 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110">
              {item.number}
            </span>

            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-zinc-900">
              {item.title}
            </h3>

            <p className="mt-2 max-w-[180px] text-sm md:text-base leading-relaxed text-zinc-500">
              {item.description}
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />
          </Animated>
        ))}

      </div>
    </section>
  )
}

export default Stats
