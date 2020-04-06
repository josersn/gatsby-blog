import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Post 
    slug="/about/"
    category="Misc"
    background="#1fa1f2"
    date="07 Abril de 2020"
    timeToRead="4"
    title="Nova maneirade de ler a tecnologia"
    description="UMa nova maneira de ler e entende a tecnologia"
    />
  </Layout>
)

export default IndexPage
