import { graphql } from "gatsby";

export const postFragment = graphql`
  fragment post on Mdx {
    id
    body
    excerpt(pruneLength: 300)
    fields {
      slug
      tagSlugs
      categorySlug
    }
    frontmatter {
      date
      description
      tags
      template
      title
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      headings {
        depth
        value
      }
      tableOfContents
    }
  }

  fragment postList on Mdx {
    fields {
      slug
      title
      date
      categorySlug
    }
    excerpt(pruneLength: 300)
    frontmatter {
      title
      date
      category
      tags
      featured
      socialImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default postFragment;
