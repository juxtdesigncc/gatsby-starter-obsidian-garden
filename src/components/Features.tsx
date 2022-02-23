import React from "react";

const featureData = [
  {
    title: "Obsidian full support",
    description:
      "Publish your Obsidian knowledge base as a website for free using Gatsby",
  },
  {
    title: "YAML support",
    description:
      "Support YAML (e.g. tags, publish) that are also supported by Obsidian",
  },
];

export default function Features() {
  return (
    <div className="grid gap-6 grid-cols-12">
      {featureData.map((item) => (
        <div className="col-span-12 md:col-span-6">
          <span className="block w-64 h-64 bg-red-200"></span>
          <h3 className="my-4 font-light">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
