import React from "react"

import {graphql} from 'gatsby';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Grid from '../components/grid-layout/grid-layout';

const IndexPage = ({data}) => {
  
  return (
    <Layout>
      <SEO title="Home" keywords={[`portfolio`, `gatsby`, `react`]} />
      <Grid imgs={data.thumbs.edges}/>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    thumbs: allFile(
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800 quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`