"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Chevrons from "./subcomponents/chevrons"

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [showChevrons, setShowChevrons] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setShowChevrons(true)
          setTimeout(() => setVisible(false), 1500)
          return 100
        }
        return prev + 1
      })
    }, 15)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center gap-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {showChevrons ? (
            <Chevrons />
          ) : (
            <>
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-pink-500 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}