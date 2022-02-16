import React from "react";
import { Link } from "gatsby";

export default function ListNote({ edges }) {
  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-12 md:col-span-6 my-8 md:my-0 border-color-slate-200 border-b">
          <div className="flex gap-2 items-center">
            <time>{edge.node.fields.date}</time>
            {edge.node.frontmatter.category && (
              <small className="bg-slate-200 text-xs tracking-normal uppercase rounded-lg px-2 py-1">
                {edge.node.frontmatter.category}
              </small>
            )}
          </div>
          <Link to={edge.node.fields.slug}>
            <h2>{edge.node.fields.title}</h2>
          </Link>
          <p className="mb-4">
            {edge.node.excerpt || edge.node.frontmatter.description}
          </p>
        </div>
      ))}
    </>
  );
}
