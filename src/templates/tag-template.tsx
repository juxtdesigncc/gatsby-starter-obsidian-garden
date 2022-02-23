import React from "react";
import { graphql } from "gatsby";
import Layout from "@/components/Layout";
import ListNote from "@/components/ListNote";
import { PageContext, AllMdx } from "@/utils/type";
import { SITE_TITLE } from "../../config";
import kebabCase from "lodash.kebabcase";

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
      ? `All posts tagged with ${tag} - Page ${currentPage} - ${SITE_TITLE}`
      : `All posts tagged with ${tag} - ${SITE_TITLE}`;

  return (
    <Layout title={pageTitle}>
      <div className="my-2 py-4 border-b border-slate-200">
        <h1 className="capitalize inline-block mr-2 text-5xl md:text-7xl font-black">
          {kebabCase(tag)}
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
