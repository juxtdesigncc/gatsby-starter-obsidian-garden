// 'use strict';

// const path = require('path');
// const siteConfig = require('../../config.js');

// module.exports = async (graphql, actions) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allMdx(
//         filter: {
//           frontmatter: { publish: { ne: false } }
//           fileAbsolutePath: { regex: "/vault/" }
//         }
//       ) {
//         totalCount
//       }
//     }
//   `);

//   const {   POST_PER_PAGE } = siteConfig;
//   const numPages = Math.ceil(result.data.allMdx.totalCount /   POST_PER_PAGE);

//   for (let i = 0; i < numPages; i += 1) {
//     createPage({
//       path: i === 0 ? '/' : `/page/${i}`,
//       component: path.resolve('./src/templates/index-template.tsx'),
//       context: {
//         currentPage: i,
//         postsLimit:   POST_PER_PAGE,
//         postsOffset: i *   POST_PER_PAGE,
//         prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
//         nextPagePath: `/page/${i + 1}`,
//         hasPrevPage: i !== 0,
//         hasNextPage: i !== numPages - 1,
//       },
//     });
//   }
// };
