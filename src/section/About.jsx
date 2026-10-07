import React from 'react'
import Animated from '../components/Animated'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf8f3] px-6 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">

        {/* Image */}
        <Animated scale={0.8} y={0}>
          <div className="relative">

            {/* Decorative background */}
            <div className="absolute -inset-4 rounded-[2rem] bg-orange-100 -z-0 rotate-3" />

            <img
              src="/assets/about.png"
              alt="Delicious dish"
              className="
                relative
                z-10
                w-full
                max-w-[550px]
                h-[420px]
                md:h-[500px]
                object-cover
                rounded-[2rem]
                shadow-2xl
              "
            />

          </div>
        </Animated>

        {/* Content */}
        <Animated scale={0.95} y={30}>
          <div className="max-w-xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] font-semibold text-brown-500">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight text-zinc-900">
              Where every dish
              <span className="block text-orange-500">
                tells a story.
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-600">
              At Savora, we believe great food is more than just a meal.
              It is an experience crafted with passion, fresh ingredients,
              and flavors that bring people together.
            </p>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              From traditional favorites to our signature creations,
              every plate is prepared with care to make your dining
              experience truly memorable.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl">
  <div className="grid md:grid-cols-2">

    {/* Story Image */}
    <img
      src="/assets/storyabt.avif"
      alt="Our Story"
      className="h-56 w-full object-cover md:h-full"
    />

    {/* Story Content */}
    <div className="p-6 md:p-8">
      <p className="text-sm uppercase tracking-[0.25em] font-semibold text-orange-500">
        Our Story
      </p>

      <h3 className="mt-2 text-2xl font-serif font-semibold text-zinc-900">
        Made with passion
      </h3>

      <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-600">
        What started with a love for authentic flavors became a place
        where people come together, share stories, and enjoy food made
        with passion.
      </p>
    </div>

  </div>
</div>


            <button
              className="
                mt-8
                rounded-full
                bg-orange-500
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
                hover:bg-orange-600
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Discover Our Story
            </button>

          </div>
        </Animated>

      </div>
    </section>
  )
}

export default About
