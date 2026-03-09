"use client"

import { useState } from "react"

export default function GradientGenerator() {
  const [colors, setColors] = useState(["#ff7e5f", "#feb47b"])
  const [angle, setAngle] = useState(135)
  const [type, setType] = useState("linear")

  function updateColor(index: number, value: string) {
    const newColors = [...colors]
    newColors[index] = value
    setColors(newColors)
  }

  function addColor() {
    setColors([...colors, "#ffffff"])
  }

  function removeColor(index: number) {
    setColors(colors.filter((_, i) => i !== index))
  }

  function randomGradient() {
    const randomColor = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    setColors([randomColor(), randomColor()])
    setAngle(Math.floor(Math.random() * 360))
  }

  const gradientCSS =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${colors.join(",")})`
      : `radial-gradient(circle, ${colors.join(",")})`

  function copyCSS() {
    navigator.clipboard.writeText(`background: ${gradientCSS};`)
    alert("CSS copied!")
  }

  function copyTailwind() {
    const tailwind = `bg-[${gradientCSS}]`
    navigator.clipboard.writeText(tailwind)
    alert("Tailwind CSS copied!")
  }

  function downloadPNG() {
    const canvas = document.createElement("canvas")
    canvas.width = 1200
    canvas.height = 600
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gradient =
      type === "linear"
        ? ctx.createLinearGradient(0, 0, canvas.width, 0)
        : ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2
          )
    colors.forEach((color, index) => {
      gradient.addColorStop(index / (colors.length - 1), color)
    })
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const link = document.createElement("a")
    link.download = "dihue-gradient.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}> </h2>

      {/* Gradient Preview */}
      <div style={{ ...previewStyle, background: gradientCSS }} />

      {/* Color Controls */}
      <div style={colorListStyle}>
        {colors.map((c, i) => (
          <div key={i} style={colorItemStyle}>
            <input
              type="color"
              value={c}
              onChange={e => updateColor(i, e.target.value)}
              style={colorInputStyle}
            />
            <button onClick={() => removeColor(i)} style={removeButtonStyle}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={addColor} style={addButtonStyle}>
          + Add Color
        </button>
      </div>

      {/* Angle Control */}
      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ color: "#ccc", fontSize: "0.9rem" }}>Angle: {angle}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={e => setAngle(parseInt(e.target.value))}
          style={{ width: "100%", marginTop: "0.3rem" }}
        />
      </div>

      {/* Gradient Type */}
      <div style={buttonGroupStyle}>
        <button
          onClick={() => setType("linear")}
          style={type === "linear" ? activeTypeButton : typeButton}
        >
          Linear
        </button>
        <button
          onClick={() => setType("radial")}
          style={type === "radial" ? activeTypeButton : typeButton}
        >
          Radial
        </button>
      </div>

      {/* Action Buttons */}
      <div style={buttonGroupStyle}>
        <button onClick={randomGradient} style={purpleButton}>
          Random
        </button>
        <button onClick={copyCSS} style={greenButton}>
          Copy CSS
        </button>
        <button onClick={copyTailwind} style={blueButton}>
          Copy Tailwind
        </button>
        <button onClick={downloadPNG} style={neutralButton}>
          Download PNG
        </button>
      </div>
    </div>
  )
}

// --- Styles ---
const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "1.5rem",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
}

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#fff",
}

const previewStyle: React.CSSProperties = {
  height: "200px",
  borderRadius: "1rem",
  transition: "background 0.3s ease",
}

const colorListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
}

const colorItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
}

const colorInputStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "none",
  cursor: "pointer",
  borderRadius: "0.5rem",
}

const removeButtonStyle: React.CSSProperties = {
  padding: "0.3rem 0.7rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  background: "rgba(255,0,0,0.2)",
  color: "#fff",
  transition: "all 0.2s",
}

const addButtonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "none",
  cursor: "pointer",
  background: "rgba(255,255,255,0.1)",
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "flex-start",
  transition: "all 0.2s",
}

const buttonGroupStyle: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1rem",
}

const typeButton: React.CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
}

const activeTypeButton: React.CSSProperties = {
  ...typeButton,
  background: "rgba(255,255,255,0.2)",
  borderColor: "#fff",
}

const purpleButton: React.CSSProperties = {
  ...typeButton,
  background: "#7f5af0",
  borderColor: "#7f5af0",
}

const greenButton: React.CSSProperties = {
  ...typeButton,
  background: "#22c55e",
  borderColor: "#22c55e",
}

const blueButton: React.CSSProperties = {
  ...typeButton,
  background: "#3b82f6",
  borderColor: "#3b82f6",
}

const neutralButton: React.CSSProperties = {
  ...typeButton,
  background: "rgba(255,255,255,0.05)",
  borderColor: "rgba(255,255,255,0.2)",
}