import React from "react";
import { graphql } from "gatsby";
import Layout from "@/components/Layout";
import ListNote from "@/components/ListNote";
import { PageContext, AllMdx } from "@/utils/type";
import { useSiteMetadata } from "@/hooks";
import Container from "@/components/Container";

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle } = useSiteMetadata();
  const { edges } = data.allMdx;
  const {
    tag,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const pageTitle =
    currentPage > 0
      ? `所有關於"${tag}"的文章 - 第${currentPage}頁 - ${siteTitle}`
      : `所有關於"${tag}"的文章 - ${siteTitle}`;

  return (
    <Layout>
      <h1 className="capitalize">{tag}</h1>
      <ListNote edges={edges} />
    </Layout>
  );
};

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

export const query = graphql`
  query TagPage($tag: String) {
    allMdx(
      # limit: $postsLimit
      # skip: $postsOffset
      filter: { frontmatter: { publish: { ne: false }, tags: { in: [$tag] } } }
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

export default TagTemplate;
