"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {

return (

<section className="relative text-center py-24 overflow-hidden">

{/* Animated Gradient Background */}
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-20 blur-3xl -z-10"
  animate={{ x: ["0%", "-50%", "0%"] }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
/>

<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 relative z-10">
Beautiful Gradients
<br/>
For Your Designs
</h1>

<p className="mt-6 text-gray-400 text-lg relative z-10">
Explore, generate, and export stunning gradients
for your UI designs.
</p>

<div className="mt-10 flex justify-center gap-6 relative z-10">

<Link
  href="/gradients"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 hover:opacity-90 transition shadow-lg shadow-purple-500/20"
>
Explore Gradients
</Link>

<Link
  href="/generator"
  className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
>
Generate Gradient
</Link>

</div>

</section>

)

}