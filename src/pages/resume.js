import React, { useState } from "react"
import Layout from "../components/layout"
import { FaDownload as Download } from "react-icons/fa"

export default function Resume() {
  const [, setPages] = useState(null)
  const [pageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPages(numPages)
  }

  return (
    <Layout title="Resume">
      <div className="container" style={{ width: ' 612px' }}>
        <div className='h3 text-right mb-3' >
          {/* <a className="icon" href={rodwellResume}>
          </a> */}
        </div>
        <div className='mb-5'>
          Resume placeholder
        </div>
      </div>
    </Layout>
  )
}
