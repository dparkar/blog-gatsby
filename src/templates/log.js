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
      { name: 'keywords', content: data.keywords },
      { name: 'og:title', content: 'dp | ' + data.title},
      { name: 'og:url', content: 'https://dparkar.github.io/blog-gatsby' + data.path},
      { name: 'og:description', content: data.description},
      { name: 'og:type', content: 'website'},
      { name: 'og:site_name', content: 'dplogs'},
      { name: 'og:image', content: data.image},
      { name: 'og:image:alt', content: data.image_alt},
      { name: 'og:image:width', content: data.image_width},
      { name: 'og:image:height', content: data.image_height},
      { name: 'fb:app_id', content: '367989410291145'},
      { name: 'twitter:card', content: 'summary'},
      { name: 'twitter:creator', content: '@dparkar'}]} />
      <div className="blog-post">
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
        keywords
        description
        image
        image_alt
        image_width
        image_height
      }
    }
  }
`
;