const dayjs = require(`dayjs`);
const path = require(`path`);
const kebabCase = require("lodash.kebabcase");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require("gatsby-source-filesystem");

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);

  fmImagesToRelative(node);

  if (node.internal.type === "Mdx") {
    // const source = fileNode.sourceInstanceName;
    // const parsedFilePath = path.parse(fileNode.relativePath);
    // let title;
    // let slug;

    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // ) {
    //   slug = `/${kebabCase(node.frontmatter.title)}`;
    // } else {

    // }

    const kebabFilename = kebabCase(fileNode.name);

    const fileSlug = createFilePath({
      node,
      getNode,
      basePath: `vault/`,
    });

    createNodeField({
      node,
      name: "slug",
      value: node.frontmatter.slug || kebabFilename,
    });

    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // ) {
    //   fileName = node.frontmatter.title;
    // } else {
    //   fileName = fileNode.name;
    // }

    createNodeField({
      node,
      name: "title",
      value: node.frontmatter.title || fileNode.name,
    });

    const date = fileNode.birthTime;
    const dateFormat = `DD MMM YYYY`;
    const processedFileDate = dayjs(date).format(dateFormat);

    if (node.frontmatter.date) {
      const processedFrontmatterDate = dayjs(node.frontmatter.date).format(
        dateFormat
      );
      createNodeField({
        node,
        name: "date",
        value: processedFrontmatterDate,
      });
    } else {
      createNodeField({
        node,
        name: "date",
        value: processedFileDate,
      });
    }

    // console.log(processedFrontmatterDate, processedFileDate);

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tag/${kebabCase(tag)}/`
      );
      createNodeField({ node, name: "tagSlugs", value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: "categorySlug", value: categorySlug });
    } else {
      createNodeField({
        node,
        name: "categorySlug",
        value: `/category/seedling/`,
      });
    }
  }
};

module.exports = onCreateNode;
