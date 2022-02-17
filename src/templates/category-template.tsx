import Layout from "@/components/Layout";
import React from "react";
import ListNote from "@/components/ListNote";
import { graphql } from "gatsby";
import { useSiteMetadata } from "../hooks";

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMdx;
  const {
    category,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;
  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle}>
      <h1>{category}</h1>
      <ListNote edges={edges} />
      {/* {(hasPrevPage || hasNextPage) && (
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      )} */}
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String) {
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false }, category: { eq: $category } }
      }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          ...postList
        }
      }
    }
  }
`;

export default CategoryTemplate;
