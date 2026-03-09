"use client"

import { useState } from "react"
import { palettes as defaultPalettes } from "@/data/palettes"

export default function PaletteGrid(){

const [palettes,setPalettes] = useState(defaultPalettes)

function copyColor(color:string){
navigator.clipboard.writeText(color)
alert("Copied " + color)
}

function randomColor(){
return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")
}

function generatePalette(){

const newPalette = {
id: Date.now(),
name: "Random Palette",
colors:[
randomColor(),
randomColor(),
randomColor(),
randomColor(),
randomColor()
]
}

setPalettes([newPalette,...palettes])

}

return(

<div>

{/* Generate Button */}

<div className="mb-10">
<button
onClick={generatePalette}
className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
>
Generate Random Palette
</button>
</div>

{/* Palette Grid */}

<div className="grid md:grid-cols-3 gap-8">

{palettes.map((palette)=>(
<div
key={palette.id}
className="bg-zinc-900 p-4 rounded-xl border border-zinc-800"
>

<h3 className="mb-4 font-semibold text-lg">
{palette.name}
</h3>

<div className="flex overflow-hidden rounded">

{palette.colors.map((color,i)=>(
<div
key={i}
onClick={()=>copyColor(color)}
className="h-20 flex-1 cursor-pointer hover:scale-105 transition"
style={{background:color}}
title="Click to copy"
/>
))}

</div>

</div>
))}

</div>

</div>

)

}