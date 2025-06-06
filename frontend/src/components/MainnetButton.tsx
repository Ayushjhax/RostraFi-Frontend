"use client"

// Create a new component for the Mainnet button
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function MainnetButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="https://www.mainnet.rostrafi.fun"
      target="_blank"
      rel="noopener noreferrer"
      className="relative mr-3 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(236, 72, 153, 0.9))",
        boxShadow: isHovered ? "0 0 20px rgba(192, 132, 252, 0.6)" : "0 0 10px rgba(192, 132, 252, 0.3)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Light sweep animation */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10 skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}

      <div className="flex items-center">
        <span>Switch to Mainnet</span>
        <ExternalLink className="ml-1.5 w-4 h-4" />
      </div>
    </motion.a>
  )
}
