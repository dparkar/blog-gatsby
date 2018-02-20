import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'keywords', content: 'sample, something' },
        { name: 'og:title', content: 'logs | dhawal parkar'},
        { name: 'og:url', content: 'https://dparkar.github.io/blog-gatsby/page-2'},
        { name: 'og:description', content: 'Artificial Intelligence and Robotics'},
        { name: 'og:type', content: 'website'},
        { name: 'og:site_name', content: 'dplogs'},
        { name: 'og:image', content: 'https://toolkit.loomly.com/wp-content/uploads/2017/07/Customize-Facebook-Link-Previews-With-Pretty-Links-And-With-Caution.jpg'},
        { name: 'og:image:alt', content: 'dplogs'},
        { name: 'og:image:width', content: '250'},
        { name: 'og:image:height', content: '250'},
        { name: 'fb:app_id', content: '367989410291145'},
        { name: 'twitter:card', content: 'summary'},
        { name: 'twitter:creator', content: '@dparkar'}
      ]}
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
