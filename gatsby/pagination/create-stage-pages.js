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
        group(field: fields___stage) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  result.data.allMdx.group.forEach((stage) => {
    const numPages = Math.ceil(stage.totalCount / POST_PER_PAGE);
    const stageSlug = `/stage/${kebabCase(stage.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? `${stageSlug}/` : `${stageSlug}/page/${i}`,
        component: path.resolve("./src/templates/stage-template.tsx"),
        context: {
          stage: stage.fieldValue,
          slug: stageSlug,
          currentPage: i,
          postsLimit: POST_PER_PAGE,
          postsOffset: i * POST_PER_PAGE,
          prevPagePath: i <= 1 ? stageSlug : `${stageSlug}/page/${i - 1}`,
          nextPagePath: `${stageSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      });
    }
  });
};
