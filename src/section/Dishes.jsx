import React, { useState } from 'react'
import Animated from '../components/Animated'
import { dishes } from '../data/data'
import { motion } from 'motion/react'

const Dishes = () => {
  const [rotate, setRotate] = useState([])

  return (
    <section id="dishes" className="mt-0 px-6 py-20">
      <div className="text-center">

        {/* Chef's Choice */}
        <Animated>
          <p className="text-orange-500 font-medium uppercase tracking-wide mb-2">
            Chef's Choice
          </p>
        </Animated>

        {/* Heading */}
        <Animated>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Discover our{' '}
            <span className="font-serif italic text-orange-500">
              Best Dishes
            </span>
          </h2>
        </Animated>

        {/* Dishes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto mt-10">
          {dishes.map((dish, index) => (
            <Animated
              key={dish.title || index}
              y={80}
              delay={index * 0.1}
              className="flex flex-col items-center text-center shrink-0 cursor-pointer"
              onMouseEnter={() =>
                setRotate((prev) => ({
                  ...prev,
                  [index]: (prev[index] || 0) + 180,
                }))
              }
            >
              {/* Image */}
              <motion.div
                animate={{
                  rotate: rotate[index] || 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                }}
              >
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="size-30 md:size-35 object-cover"
                />
              </motion.div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {dish.title}
              </h3>

              {/* Price */}
              <p className="mt-2 text-zinc-600 font-medium">
                {dish.price}
              </p>
            </Animated>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Dishes
