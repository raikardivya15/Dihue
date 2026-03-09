"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function GradientCard({ gradient }: any) {
  const [copied, setCopied] = useState(false)

  function copyCSS() {
    navigator.clipboard.writeText(gradient.css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // reset after 2s
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="mb-6 rounded-2xl overflow-hidden shadow-xl border border-white/10"
    >
      <div
        className="h-40 w-full"
        style={{ background: gradient.css }}
      />

      <div className="p-4 bg-black">
        <h3 className="text-white font-semibold">{gradient.name}</h3>
        <p className="text-sm text-gray-400">{gradient.colors.join(" , ")}</p>

        <button
          onClick={copyCSS}
          className="mt-3 px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 text-white"
        >
          {copied ? "Copied!" : "Copy CSS"}
        </button>
      </div>
    </motion.div>
  )
}