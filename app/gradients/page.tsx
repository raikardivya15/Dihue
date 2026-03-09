import Navbar from "@/components/Navbar"
import GradientGrid from "@/components/GradientGrid"
import Footer from "@/components/Footer"

export default function GradientsPage(){

return(

<main className="bg-black min-h-screen text-white">

<Navbar/>

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-4xl font-bold mb-10">
 Gradients Gallery
</h1>

<GradientGrid/>

</div>
<Footer />
</main>

)

}