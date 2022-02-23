const kebabCase = require("lodash.kebabcase");
const path = require("path");
const siteConfig = require("../../config.js");

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { POST_PER_PAGE } = siteConfig;

  const result = await graphql(`
    {
      allMdx(
        filter: {
          frontmatter: { publish: { ne: false } }
          fileAbsolutePath: { regex: "/vault/" }
        }
      ) {
        group(field: fields___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  result.data.allMdx.group.forEach((category) => {
    const numPages = Math.ceil(category.totalCount / POST_PER_PAGE);
    const categorySlug = `/category/${kebabCase(category.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `${categorySlug}/` : `${categorySlug}/page/${i}`,
        component: path.resolve("./src/templates/category-template.tsx"),
        context: {
          category: category.fieldValue,
          slug: categorySlug,
          currentPage: i,
          postsLimit: POST_PER_PAGE,
          postsOffset: i * POST_PER_PAGE,
          prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPagePath: `${categorySlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      });
    }
  });
};
