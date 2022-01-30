import React from 'react'

import Pages from './Pages'

import Header from '../Header'
import Navigation from '../Navigation'
import Footer from '../Footer'

import { BusinessCard, BusinessCardContent } from './styles'

export default function Body({ slug }) {
  return (
    <BusinessCard raised>
      <Header />
      <BusinessCardContent>
        <Navigation />
        <Pages slug={slug} />
      </BusinessCardContent>
      <Footer />
    </BusinessCard>
  )
}
