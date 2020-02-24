import React from 'react'
import { Appbar, SEO } from '.'

export default function Layout({ title, children }) {
  return (
    <>
      <SEO title={title}/>
      <Appbar/>
      <div>
        {children}
      </div>
    </>
  )
}