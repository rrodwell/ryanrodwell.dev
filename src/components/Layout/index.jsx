import React from 'react'

import Navbar from '../Navbar'


export default function Layout({ title, children }) {
  return (
    <>
      <Seo title={title}/>
      <Navbar/>
      <div>
        {children}
      </div>
    </>
  )
}