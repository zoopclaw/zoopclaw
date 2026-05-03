import Link from "next/link"

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
      fontFamily: "Arial",
      textAlign: "center"
    }}>

      <h1 style={{
        fontSize: "64px",
        background: "linear-gradient(90deg, #00f0ff, #0077ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        ZoopClaw
      </h1>

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        Execução na velocidade de Planck ⚡
      </p>

      <Link href="/chat">
        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "18px",
          background: "linear-gradient(90deg, #00f0ff, #0077ff)",
          border: "none",
          borderRadius: "12px",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(0, 240, 255, 0.6)"
        }}>
          Testar IA 🚀
        </button>
      </Link>

    </main>
  )
}
