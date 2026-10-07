import React from 'react'
import Animated from '../components/Animated'

const Features = () => {
  return (
    <section
      id="features"
      className="mt-28 md:mt-40 px-6 overflow-hidden"
    >
      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className="text-center max-w-5xl mx-auto">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase tracking-[0.18em] text-sm mb-3">
            What Makes Us Special
          </p>
        </Animated>

        <Animated delay={0.3}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.08]">
            Crafted to Delight, Served to Remember
          </h2>
        </Animated>
      </div>

      {/* =========================
          CONTENT + IMAGE SECTION
      ========================== */}
      <div className="grid md:grid-cols-[0.8fr_1.2fr] items-center gap-12 lg:gap-20 max-w-7xl mx-auto mt-14 md:mt-20">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <Animated x={-40} y={0} delay={0.3}>
          <div className="max-w-xl">

            {/* Main heading */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-6">
              Where Passion Meets Every Plate
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-8 mb-5">
              We believe great food is more than just a meal. It is an
              experience crafted with passion, fresh ingredients, and a touch
              of creativity.
            </p>

            <p className="text-gray-500 leading-7 mb-8">
              From carefully selected ingredients to beautiful presentation,
              every dish we serve is thoughtfully prepared to bring people
              together and create moments worth remembering.
            </p>

            {/* Button */}
         <button
  className="
    inline-flex
    items-center
    gap-2
    bg-[#60360b]
    hover:bg-[#60360b]
    text-white
    px-7
    py-3.5
    rounded-full
    font-medium
    transition-all
    duration-300
    hover:shadow-lg
    hover:shadow-[#5F6F52]/30
    hover:-translate-y-0.5
  "
>
  Made with care, served with love
  <span>→</span>
</button>


            {/* Small Stats */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200">

              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  10+
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Years Experience
                </p>
              </div>

              <div className="w-px h-10 bg-gray-200" />

              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  50+
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Signature Dishes
                </p>
              </div>

              <div className="w-px h-10 bg-gray-200" />

              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  4.9
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Guest Rating
                </p>
              </div>

            </div>

          </div>
        </Animated>

        {/* =========================
            RIGHT IMAGE COLLAGE
        ========================== */}
        <Animated x={40} y={0} delay={0.4}>
          <div
            className="
              relative
              w-full
              p-5
              sm:p-6
              rounded-[2rem]
              bg-orange-50/50
              border
              border-orange-100
            "
          >

            <div className="grid grid-cols-2 gap-4">

              {/* Image 1 */}
              <div className="h-52 sm:h-60 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/chef.png"
                  alt="Chef preparing a dish"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Image 2 */}
              <div className="h-64 sm:h-72 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/cf2.jpg"
                  alt="Chef working in the kitchen"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Image 3 */}
              <div className="h-40 sm:h-48 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/cf3.jpg"
                  alt="Fresh food being cooked"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Image 4 */}
              <div className="h-64 sm:h-72 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/assets/cf4.jpg"
                  alt="Chef plating a dish"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

            </div>

          </div>
        </Animated>

      </div>
    </section>
  )
}

export default Features
