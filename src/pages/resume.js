import React, { useState } from "react"
import Layout from "../components/layout"
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack"
import { FaDownload as Download } from "react-icons/fa"
import rodwellResume from "../resume/RodwellResume.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

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
          <a className="icon" href={rodwellResume}>
            <Download />
          </a>
        </div>
        <div className='mb-5'>
          <Document file={rodwellResume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={612} />
          </Document>
        </div>
      </div>
    </Layout>
  )
}
