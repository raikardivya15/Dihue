import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function AboutPage(){

return(

<main className="bg-black text-white min-h-screen">

<Navbar/>

{/* Hero Section */}

<section className="max-w-6xl mx-auto px-6 py-24 text-center">

<h1 className="text-5xl md:text-6xl font-bold mb-6">
Design Better Gradients
</h1>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">
Dihue is a modern gradient and color toolkit built for designers
and developers who want beautiful colors instantly.
</p>

</section>


{/* Mission Section */}

<section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-3xl font-bold mb-6">
Our Mission
</h2>

<p className="text-gray-400 leading-relaxed">
Creating gradients and color palettes should be fast, inspiring,
and effortless. Dihue was built to help designers discover
beautiful gradients, generate palettes instantly, and export
production-ready CSS in seconds.
</p>

</div>

<div className="h-64 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"/>

</section>


{/* Feature Section */}

<section className="max-w-6xl mx-auto px-6 py-20">

<h2 className="text-3xl font-bold mb-12 text-center">
What Dihue Offers
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
<h3 className="text-xl font-semibold mb-3">
Gradient Generator
</h3>
<p className="text-gray-400">
Create beautiful gradients instantly and copy production-ready CSS
or Tailwind code.
</p>
</div>

<div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
<h3 className="text-xl font-semibold mb-3">
200+ Gradient Library
</h3>
<p className="text-gray-400">
Browse a growing collection of gradients ready to use in your
designs and websites.
</p>
</div>

<div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
<h3 className="text-xl font-semibold mb-3">
Color Palettes
</h3>
<p className="text-gray-400">
Generate random palettes and copy color codes instantly for UI,
branding, and illustrations.
</p>
</div>

</div>

</section>


{/* Creator Section */}

<section className="max-w-4xl mx-auto px-6 py-20 text-center">

<h2 className="text-3xl font-bold mb-6">
Built for Designers
</h2>

<p className="text-gray-400 leading-relaxed mb-8">
Dihue is built with a focus on simplicity and speed.
The goal is to give designers and developers a clean
interface to explore gradients and colors without friction.
</p>

<p className="text-gray-500">
Created by{" "}
<a
href="https://your-portfolio-link.com"
target="_blank"
className="text-purple-400 hover:text-purple-300 underline"
>
raikardivya15
</a>
</p>

</section>
{/* CTA Section */}

<section className="text-center py-24 px-6 border-t border-zinc-800">

<h2 className="text-4xl font-bold mb-6">
Start Creating Beautiful Gradients
</h2>

<p className="text-gray-400 mb-8">
Generate stunning gradients and palettes in seconds.
</p>

<a
href="/generator"
className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
>
Open Gradient Generator
</a>

</section>
<Footer />
</main>

)

}