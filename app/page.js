"use client"

export default function Home() {
  return (
    <main style={{
      background: "radial-gradient(circle at top, #0a0f1f, #000)",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      overflow: "hidden"
    }}>

      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, #0077ff55, transparent)",
        filter: "blur(100px)",
        top: "20%",
        zIndex: 0
      }} />

      <div style={{ zIndex: 1 }}>

        <h1 style={{
          fontSize: "64px",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #00f0ff, #0077ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px"
        }}>
          ZoopClaw
        </h1>

        <p style={{
          fontSize: "18px",
          opacity: 0.7,
          marginBottom: "30px"
        }}>
          Execução na velocidade de Planck ⚡
        </p>

        <button style={{
          padding: "14px 28px",
          background: "linear-gradient(90deg, #0077ff, #00f0ff)",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 20px #0077ff88",
          transition: "0.3s"
        }}
        onMouseOver={(e) => {
          e.target.style.boxShadow = "0 0 30px #00f0ff"
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow = "0 0 20px #0077ff88"
        }}
        >
          Testar IA 🚀
        </button>

      </div>

    </main>
  )
}
