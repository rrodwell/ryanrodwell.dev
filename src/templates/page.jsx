import React from 'react'
import Layout from '../components/Layout'

export default function PageTemplate({ pageContext: { site, slug, title } }) {
  return <Layout site={site} slug={slug} pageTitle={title} />
}
