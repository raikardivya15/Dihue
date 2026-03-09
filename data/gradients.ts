export const gradients = Array.from({ length: 200 }).map((_, i) => {

const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16)
const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16)

return {
id: i + 1,
name: `Gradient ${i + 1}`,
colors: [color1, color2],
css: `linear-gradient(135deg, ${color1}, ${color2})`
}

})