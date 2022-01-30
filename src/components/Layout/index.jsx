import React from 'react'
import { CssBaseline } from '@mui/material'

import Seo from './Seo'
import Body from './Body'

import { Container } from './styles'

export default function Layout({ site: { siteMetadata }, pageTitle, slug }) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Seo pageTitle={pageTitle} siteMetadata={siteMetadata} />
        <Body slug={slug} />
      </Container>
    </>
  )
}
