import React from "react"
import Layout from "../components/layout"

export default function ErrorPage() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>404 Page Not Found</h1>
      </div>
    </Layout>
  )
}
