import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../styles/log-listing.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
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
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;