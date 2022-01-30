import React from 'react'

import Seo from './Seo'
import Pages from './Pages'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Layout({ site: { siteMetadata }, pageTitle, slug }) {
  return (
    <>
      <Seo pageTitle={pageTitle} siteMetadata={siteMetadata} />
      <Navbar />
      <Pages slug={slug} />
      <Footer />
    </>
  )
}
