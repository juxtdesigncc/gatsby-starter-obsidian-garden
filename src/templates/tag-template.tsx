import React from "react";
import { graphql } from "gatsby";
import Layout from "@/components/Layout";
import ListNote from "@/components/ListNote";
import { PageContext, AllMdx } from "@/utils/type";
import { SITE_TITLE } from "../../config";
import Container from "@/components/Container";

const TagTemplate = ({ data, pageContext }: Props) => {
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
      ? `所有關於"${tag}"的文章 - 第${currentPage}頁 - ${SITE_TITLE}`
      : `所有關於"${tag}"的文章 - ${SITE_TITLE}}`;

  return (
    <Layout title={pageTitle}>
      <div className="py-4 border-b border-slate-200">
        <h1 className="capitalize inline-block mr-2 text-3xl md:text-6xl">
          {tag}
        </h1>
        <p className="inline-block text-sm">({edges.length})</p>
      </div>
      <div className="relative flex flex-col gap-2 md: gap-4 my-10">
        <ListNote edges={edges} />
      </div>
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
