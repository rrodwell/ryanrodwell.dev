import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Card from './card'
import '../../style.css'

const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }
  }
`

export default function Projects() {
  const {
    allProjectsYaml: { edges },
  } = useStaticQuery(query)

  return (
    <div className="container">
      <div className="row">
        {edges.map(({ id, title, subtitle, link }) => {
          return (
            <Card
              key={id}
              cardTitle={title}
              cardSubtitle={subtitle}
              link={link}
            />
          )
        })}
      </div>
    </div>
  )
}
