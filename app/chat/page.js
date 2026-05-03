"use client"

import { useState } from "react"

export default function Chat() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  async function sendMessage() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message })
    })

    const data = await res.json()
    setResponse(data.reply)
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
      padding: "20px"
    }}>

      <h1 style={{ marginBottom: "20px" }}>ZoopClaw AI 🤖</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua pergunta..."
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "100px",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />

      <button onClick={sendMessage} style={{
        padding: "10px 20px",
        background: "#0077ff",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        cursor: "pointer"
      }}>
        Enviar
      </button>

      <div style={{ marginTop: "20px", maxWidth: "500px" }}>
        {response}
      </div>

    </main>
  )
}
