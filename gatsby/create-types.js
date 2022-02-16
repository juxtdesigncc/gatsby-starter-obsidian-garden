exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node @dontInfer {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      date: Date
    }
  `;
  createTypes(typeDefs);
};
