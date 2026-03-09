import Navbar from "@/components/Navbar"
import PaletteGrid from "@/components/PaletteGrid"
import Footer from "@/components/Footer"

export default function PalettesPage(){

return(

<main className="bg-black min-h-screen text-white">

<Navbar/>

<section className="max-w-6xl mx-auto py-20 px-6">

<h1 className="text-4xl font-bold mb-4">
Color Palettes
</h1>

<p className="text-gray-400 mb-12">
Click any color to copy its HEX code.
Perfect palettes for UI, branding, and gradients.
</p>

<PaletteGrid/>

</section>
<Footer />
</main>

)

}