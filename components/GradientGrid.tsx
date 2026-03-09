import GradientCard from "./GradientCard"
import {gradients} from "@/data/gradients"

export default function GradientGrid(){

return(

<section className="max-w-7xl mx-auto px-6 py-16">

<h2 className="text-3xl font-bold text-white mb-10">

</h2>

<div className="columns-1 md:columns-3 gap-6">

{gradients.map((g)=>(
<GradientCard key={g.id} gradient={g}/>
))}

</div>

</section>

)

}