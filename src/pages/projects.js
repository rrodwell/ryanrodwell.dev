import React from "react"
import "../style.css"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "../components"

export default function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <Layout title="Projects">
      <div className="container">
        <div className="row">
          {projectList.map(({ node }) => {
            return (
              <Card
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                link={node.link}
                key={node.id}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
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
