const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.createPages = require("./gatsby/create-pages");
exports.onCreateNode = require("./gatsby/on-create-node");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node @dontInfer {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      date: Date
      tags: [String]
      category: String
      publish: Boolean
      featured: Boolean
      socialImage: File @fileByRelativePath
      stage: String
    }
    type Fields {
      title: String!
      slug: String!
      date: Date!
      tagSlugs: [String]
      categorySlug: String
      category: String
      stage: String
    }
  `;

  createTypes(typeDefs);
};
