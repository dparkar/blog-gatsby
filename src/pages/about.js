import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

const About = () => (
  <div>
    <Helmet
      meta={[
        { name: 'keywords', content: 'artificial-intelligence, robotics, distributed-systems' },
        { name: 'og:title', content: 'about | dhawal parkar'},
        { name: 'og:url', content: 'https://dparkar.github.io/blog-gatsby/about'},
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
    <h1>About</h1>
    <a
            href="https://www.linkedin.com/in/dparkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="linkedin" size="2x" />
          </a>
          <a
            href="https://twitter.com/dparkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="twitter" size="2x" />
          </a>
          <a
            href="https://github.com/dparkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="github" size="2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/805588/dparkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesome name="stack-overflow" size="2x" />
          </a>
  </div>
)

export default About
