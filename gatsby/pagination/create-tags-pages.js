const kebabCase = require("lodash.kebabcase");
const path = require("path");
const siteConfig = require("../../config");

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
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  result.data.allMdx.group.forEach((tag) => {
    const numPages = Math.ceil(tag.totalCount / POST_PER_PAGE);
    const tagSlug = `/tag/${kebabCase(tag.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `${tagSlug}/` : `${tagSlug}/page/${i}`,
        component: path.resolve("./src/templates/tag-template.tsx"),
        context: {
          tag: tag.fieldValue,
          slug: tagSlug,
          currentPage: i,
          postsLimit: POST_PER_PAGE,
          postsOffset: i * POST_PER_PAGE,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      });
    }
  });
};
