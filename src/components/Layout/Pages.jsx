import React from 'react'

import Home from '../Home'
import Contact from '../Contact'
import Projects from '../Projects'
import Resume from '../Resume'
import PageNotFound from '../404'

export default function Pages({ slug }) {
  switch (slug) {
    case '/':
      return <Home />
    case '/contact':
      return <Contact />
    case '/projects':
      return <Projects />
    case '/resume':
      return <Resume />
    default:
      return <PageNotFound />
  }
}
