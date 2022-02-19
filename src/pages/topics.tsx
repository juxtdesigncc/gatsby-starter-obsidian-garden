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
      <h1 className="my-6">Topics</h1>
      <ul className="list-disc">
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link
              to={`/tag/${kebabCase(tag.fieldValue)}/`}
              className="capitalize"
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagList;
