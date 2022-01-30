import React from 'react'
import Helmet from 'react-helmet'

export default function Seo({
  pageTitle,
  siteMetadata: { description, author },
}) {
  return (
    <Helmet>
      <html lang="en" />
      <title>
        {pageTitle} | {author}
      </title>
      <meta charSet="utf-8"></meta>
      <meta name="description" content={description}></meta>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
  )
}
