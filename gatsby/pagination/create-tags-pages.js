const kebabCase = require("lodash.kebabcase");
const path = require("path");
const siteConfig = require("../../config");

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql(`
    {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  result.data.allMdx.group.forEach((tag) => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);
    const tagSlug = `/tag/${kebabCase(tag.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `${tagSlug}/` : `${tagSlug}/page/${i}`,
        component: path.resolve("./src/templates/tag-template.tsx"),
        context: {
          tag: tag.fieldValue,
          slug: tagSlug,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      });
    }
  });
};
