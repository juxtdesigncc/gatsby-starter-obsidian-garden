import React from "react";
import { graphql } from "gatsby";
import MdxProvider from "@/components/MDXProvider";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "@/components/Layout";
// import SEO from '@/components/seo';
// import { useSiteMetadata } from "../hooks";

const PostTemplate = ({ data }) => {
  // const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const postNode = data.mdx;
  const post = data.mdx.fields;
  const postTitle = data.mdx.frontmatter.title;
  // const pageTitle = `${postTitle} - ${siteTitle}`;

  return (
    <MdxProvider>
      <Layout>
        {/* <SEO postNode={data.mdx} postSEO postPath={data.mdx.fields.slug} /> */}
        <small className="text-sm font-bold uppercase tracking-tight">
          {post.date}
        </small>
        <article className="my-6 prose prose-indigo lg:prose-xl">
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </article>
      </Layout>
    </MdxProvider>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 300)
      fields {
        slug
        title
        date
        categorySlug
        # tagSlugs
      }
      frontmatter {
        title
        date
        tags
        category
        # description
        # socialImage {
        #   publicURL
        #   childImageSharp {
        #     gatsbyImageData
        #   }
        # }
      }
    }
  }
`;

export default PostTemplate;
