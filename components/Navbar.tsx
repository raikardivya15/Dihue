"use client"

import Link from "next/link"

export default function Navbar(){

return(

<nav className="flex justify-between items-center px-8 py-6 bg-black text-white border-b border-gray-800">

<h1 className="text-2xl font-bold">Dihue</h1>

<div className="flex gap-6">

<Link href="/" className="hover:text-purple-400">
Home
</Link>

<Link href="/generator" className="hover:text-purple-400">
Generator
</Link>

<Link href="/gradients" className="hover:text-purple-400">
Gradients
</Link>

<Link href="/palettes" className="hover:text-purple-400">
Palettes
</Link>

<Link href="/about" className="hover:text-purple-400">
About
</Link>

</div>

</nav>

)

}