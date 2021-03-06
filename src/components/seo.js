import React from 'react'
import Helmet from 'react-helmet'

export default function SEO({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | Ryan Rodwell</title>
    </Helmet>
  )
}