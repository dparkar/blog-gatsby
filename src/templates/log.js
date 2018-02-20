import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
     <Helmet title={`dp | ${post.frontmatter.title}`} >
     </Helmet>
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
      }
    }
  }
`
;