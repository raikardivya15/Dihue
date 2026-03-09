import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import GradientGenerator from "@/components/GradientGenerator"
import GradientGrid from "@/components/GradientGrid"

export default function Home() {

return (

<main className="bg-black min-h-screen text-white">

<Navbar/>

<Hero/>

<GradientGrid/>

<GradientGenerator/>
<Footer />
</main>

)

}