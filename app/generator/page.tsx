import Navbar from "@/components/Navbar"
import GradientGenerator from "@/components/GradientGenerator"
import Footer from "@/components/Footer"
export default function GeneratorPage(){

return(

<main className="bg-black min-h-screen text-white">

<Navbar/>

<div className="max-w-5xl mx-auto py-20">

<h1 className="text-4xl font-bold mb-10">
Gradient Generator
</h1>

<GradientGenerator/>

</div>

</main>

)

}