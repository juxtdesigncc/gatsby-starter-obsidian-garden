import React from "react";
import { PageProps, graphql } from "gatsby";
import Header from "@/components/Header";
import Container from "@/components/Container";
import ListNote from "@/components/ListNote";
import { useSiteMetadata } from "../hooks";
import Layout from "@/components/Layout";

const IndexPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <h1 className="text-black text-3xl md:text-5xl my-10 leading-12">
          {siteSubtitle}
        </h1>
        <h2 className="text-3xl text-slate-500 my-6">{siteDescription}</h2>
        <div className="relative grid grid-cols-12 gap-6">
          <ListNote edges={edges} />
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexTemplateQuery {
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false } }
        fileAbsolutePath: { regex: "/vault/" }
      }
      limit: 10
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date
            categorySlug
          }
          excerpt(truncate: true, pruneLength: 300)
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
      }
    }
  }
`;
