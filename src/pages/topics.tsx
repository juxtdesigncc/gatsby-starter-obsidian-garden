import React from "react";
import Layout from "@/components/Layout";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";
import { useTagsList } from "../hooks";
import { SITE_TITLE } from "../../config";

const TagList = ({}) => {
  const tags = useTagsList();
  return (
    <Layout title={`Tags | ${SITE_TITLE}`}>
      <div className="my-2 py-4 border-b border-slate-200">
        <h1 className="mr-2 text-3xl md:text-6xl font-black">Topics</h1>
      </div>
      <ul className="list-disc mt-4">
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link
              to={`/tag/${kebabCase(tag.fieldValue)}/`}
              className="capitalize"
            >
              {kebabCase(tag.fieldValue)} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagList;
