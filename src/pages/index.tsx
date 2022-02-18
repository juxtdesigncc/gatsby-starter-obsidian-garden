import React from "react";
import { PageProps, graphql } from "gatsby";
import Header from "@/components/Header";
import Container from "@/components/Container";
import ListNote from "@/components/ListNote";
import { HERO_TITLE, HERO_SUBTITLE } from "../../config";
import Layout from "@/components/Layout";

const IndexPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <div className="my-10">
        <span className="px-3 py-0.5 my-10 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-600 rounded-full">
          In Beta
        </span>
        <h1 className="text-black text-3xl md:text-5xl leading-12">
          {HERO_TITLE}
        </h1>
      </div>
      <h2 className="text-3xl text-slate-500 my-6">{HERO_SUBTITLE}</h2>
      <div className="relative grid grid-cols-12 gap-6">
        <ListNote edges={edges} />
      </div>
    </Layout>
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
          ...postList
        }
      }
    }
  }
`;
