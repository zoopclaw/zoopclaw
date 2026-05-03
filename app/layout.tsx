export const metadata = {
  title: "ZoopClaw",
  description: "Execução na velocidade de Planck"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#000"
      }}>
        {children}
      </body>
    </html>
  )
}
