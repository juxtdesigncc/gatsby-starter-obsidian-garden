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

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tag/${kebabCase(tag)}/`
      );
      createNodeField({ node, name: "tagSlugs", value: tagSlugs });
    }

    // create a compulsory field called "stage"
    let stages = ["seedling", "budding", "evergreen"]; // defined list of stages
    let defaultStage = "seedling";

    // create node field if frontmatter's stage matches with the list
    if (stages.includes(node.frontmatter.stage)) {
      createNodeField({
        node,
        name: "stage",
        value: node.frontmatter.stage,
      });
    } else if (!node.frontmatter.stage) {
      // apply default stage if frontmatter stage is null
      createNodeField({
        node,
        name: "stage",
        value: defaultStage,
      });
    } else if (!stages.includes(node.frontmatter.stage)) {
      // Warning if frontmatter stage not match with defined list, apply default stage
      console.warn(
        `Stage unmatch for ${node.fields.title}, please edit the respective files soonm, applied default stage`
      );
      createNodeField({
        node,
        name: "stage",
        value: defaultStage,
      });
    }

    let defaultCategory = {
      name: "notes",
      slug: "/category/notes/",
    };

    // create a compulsory field called "category", default value is
    if (node.frontmatter.category) {
      const categorySlug = `/category/${kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: "categorySlug", value: categorySlug });
      createNodeField({
        node,
        name: "category",
        value: node.frontmatter.category,
      });
    } else {
      createNodeField({
        node,
        name: "categorySlug",
        value: defaultCategory.slug,
      });
      createNodeField({
        node,
        name: "category",
        value: defaultCategory.name,
      });
    }
  }
};

module.exports = onCreateNode;
