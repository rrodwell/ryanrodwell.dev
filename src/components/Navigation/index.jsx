import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Tabs } from '@mui/material'

import { NavWrapper, VerticalTab } from './styles'

const query = graphql`
  {
    allPagesYaml(filter: { slug: { ne: "/404" } }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default function Navigation() {
  const [value, setValue] = useState(0)

  const {
    allPagesYaml: { edges },
  } = useStaticQuery(query)

  const handleChange = (e, newValue) => {
    setValue(newValue)
    window.location.href = edges[newValue].node.slug
  }

  return (
    <NavWrapper>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        centered
        aria-label="Navigation Tabs"
      >
        {edges.map(({ node: { id, title } }) => (
          <VerticalTab key={id} label={title} />
        ))}
      </Tabs>
    </NavWrapper>
  )
}
