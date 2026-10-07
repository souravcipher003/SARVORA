import React from 'react'
import Animated from '../components/Animated'
import { faqs } from '../data/data'
import { Plus, X } from 'lucide-react'

const FAQs = () => {
  return (
    <section id="faq" className="px-4 mt-44">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">

          {/* FAQ Label */}
          <Animated>
            <p className="text-[#D9A441] font-medium uppercase tracking-[0.2em] text-sm mb-3">
              Frequently Asked Questions
            </p>
          </Animated>

          {/* Heading */}
          <Animated>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#173F35]">
              Everything you{' '}
              <span className="font-serif italic text-[#D9A441]">
                need to know
              </span>
            </h2>
          </Animated>

          {/* FAQs */}
          <div className="space-y-3 mt-10">
            {faqs.map((faq, index) => (
              <Animated
                key={index}
                y={150}
                delay={index * 0.15}
              >
                <details
                  className="
                    group
                    rounded-xl
                    border border-[#173F35]/10
                    bg-[#F8F5ED]
                    text-left
                    overflow-hidden
                    transition-all duration-300
                    hover:border-[#D9A441]/40
                    hover:shadow-sm
                  "
                >
                  <summary
                    className="
                      flex items-center justify-between
                      p-5
                      cursor-pointer
                      list-none
                      [&::-webkit-details-marker]:hidden
                    "
                  >
                    <span className="text-[#173F35] font-medium pr-4">
                      {faq.question}
                    </span>

                    <span
                      className="
                        size-8
                        rounded-full
                        bg-[#173F35]
                        text-[#F8F5ED]
                        grid place-content-center
                        shrink-0
                        transition-all duration-300
                        group-open:bg-[#D9A441]
                      "
                    >
                      <Plus
                        size={15}
                        className="group-open:hidden"
                      />

                      <X
                        size={15}
                        className="hidden group-open:block"
                      />
                    </span>
                  </summary>

                  <div className="px-5 pb-5">
                    <div className="h-px bg-[#173F35]/10 mb-4" />

                    <p className="text-[#173F35]/65 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </Animated>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQs