"use client"

import { motion } from "framer-motion"

export default function Chevrons() {
  const chevronsMobile = [2, 1, 0]
  const chevronsDesktop = [6, 5, 4, 3, 2, 1, 0]

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden px-2">
      <div className="flex items-center">
        <div className="flex items-center sm:hidden">
          {chevronsMobile.map((i) => (
            <motion.div
              key={`left-mob-${i}`}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="text-white text-3xl font-bold select-none -mr-1"
            >
              {">"}
            </motion.div>
          ))}
        </div>
        <div className="hidden sm:flex items-center">
          {chevronsDesktop.map((i) => (
            <motion.div
              key={`left-desk-${i}`}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="text-white text-6xl font-bold select-none -mr-2"
            >
              {">"}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="text-white text-2xl sm:text-5xl font-bold uppercase tracking-widest mx-2 sm:mx-4 select-none whitespace-nowrap"
      >
        Welcome
      </motion.div>
      <div className="flex items-center">
        <div className="flex items-center sm:hidden">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`right-mob-${i}`}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="text-white text-3xl font-bold select-none -ml-1"
            >
              {"<"}
            </motion.div>
          ))}
        </div>
        <div className="hidden sm:flex items-center">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={`right-desk-${i}`}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className="text-white text-6xl font-bold select-none -ml-2"
            >
              {"<"}
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}