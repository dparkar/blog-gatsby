import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
     <Helmet 
     meta={[
      { name: 'keywords', content: post.frontmatter.keywords },
      { name: 'og:title', content: 'dp | ' + post.frontmatter.title},
      { name: 'og:url', content: 'https://dparkar.github.io/blog-gatsby' + post.frontmatter.path},
      { name: 'og:description', content: post.frontmatter.description},
      { name: 'og:type', content: 'website'},
      { name: 'og:site_name', content: 'dplogs'},
      { name: 'og:image', content: post.frontmatter.image_url},
      { name: 'og:image:alt', content: post.frontmatter.image_alt},
      { name: 'og:image:width', content: post.frontmatter.image_width},
      { name: 'og:image:height', content: post.frontmatter.image_height},
      { name: 'fb:app_id', content: '367989410291145'},
      { name: 'twitter:card', content: 'summary'},
      { name: 'twitter:creator', content: '@dparkar'}]} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "dddd MMMM DD YYYY hh:mm:ss A")
        path
        title
        keywords
        description
        image_url
        image_alt
        image_width
        image_height
      }
    }
  }
`
;