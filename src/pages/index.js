import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'keywords', content: 'sample, something' },
        { name: 'og:title', content: 'logs | dhawal parkar'},
        { name: 'og:url', content: 'https://dparkar.github.io/blog-gatsby/'},
        { name: 'og:description', content: 'Artificial Intelligence and Robotics'},
        { name: 'og:type', content: 'website'},
        { name: 'og:site_name', content: 'dplogs'},
        { name: 'og:image', content: 'https://dplogscontent.blob.core.windows.net/dplogs/metaimage_250_250.png'},
        { name: 'og:image:alt', content: 'dplogs'},
        { name: 'og:image:width', content: '250'},
        { name: 'og:image:height', content: '250'},
        { name: 'fb:app_id', content: '367989410291145'},
        { name: 'twitter:card', content: 'summary'},
        { name: 'twitter:creator', content: '@dparkar'}
      ]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
