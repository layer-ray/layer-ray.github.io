import React from "react"

import AboutCard from '../components/about-card/about-card';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"


const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <p style={{textAlign: "center", margin: "4rem"}} >
    I am Layer, a self-taught fullstack developer.
    </p>
    <AboutCard />
  </Layout>
)

export default SecondPage
