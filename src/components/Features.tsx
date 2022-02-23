import React from "react";

const featureData = [
  {
    title: "Self-host Obsidian Website",
    description:
      "Publish your Obsidian knowledge base as a website for free using Gatsby",
  },
  {
    title: "YAML support",
    description: "Support same YAML (e.g. tags, publish) as Obsidian",
  },
  {
    title: "Notes maturity frontmatter support",
    description:
      "Display notes' maturity, customizable stages (This template used Maggie Appleton's metaphor - Seedling, Budding, Evergreen as an example to illustrate notes' maturity)",
  },
  {
    title: "SEO",
    description:
      "Better SEO than Obsidian Publish (Using react-helmet for basic SEO setup)",
  },
];

export default function Features() {
  return (
    <div className="grid gap-6 grid-cols-12">
      {featureData.map((item) => (
        <div className="col-span-12 md:col-span-6">
          {/* <span className="block w-64 h-64 bg-red-200"></span> */}
          <h2 className="my-4 font-light">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
