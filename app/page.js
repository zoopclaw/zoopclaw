export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      
      <h1 style={{
        fontSize: "60px",
        background: "linear-gradient(90deg, #00f0ff, #0077ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        ZoopClaw
      </h1>

      <p style={{
        marginTop: "10px",
        fontSize: "18px",
        opacity: 0.7
      }}>
        Execução na velocidade de Planck ⚡
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 24px",
        background: "#0077ff",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Testar IA
      </button>

    </main>
  )
}
