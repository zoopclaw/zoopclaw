"use client"

import { useState } from "react"

export default function Chat() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  function sendMessage() {
    setResponse("⚡ ZoopClaw pensando...")

    setTimeout(() => {
      setResponse("🤖 Resposta da IA aparecerá aqui em breve!")
    }, 1200)
  }

  return (
    <main style={{
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1 style={{ marginBottom: "20px", fontSize: "32px" }}>
        ZoopClaw AI 🚀
      </h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua pergunta..."
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "120px",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "15px",
          border: "none",
          outline: "none"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "12px 25px",
          background: "linear-gradient(90deg, #00f0ff, #0077ff)",
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Enviar
      </button>

      <div style={{
        marginTop: "25px",
        maxWidth: "500px",
        textAlign: "center",
        color: "#aaa"
      }}>
        {response}
      </div>

    </main>
  )
}
