/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// This is used to create the urls
// TODO: could be moved elsewhere and imported, currently is also repeated in the Tiles component
// to provide links there as well.
// function slugify(string) {
//   const a =
//     "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
//   const b =
//     "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
//   const p = new RegExp(a.split("").join("|"), "g")

//   return string
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, "-") // Replace spaces with -
//     .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
//     .replace(/&/g, "-and-") // Replace & with 'and'
//     .replace(/[^\w-]+/g, "") // Remove all non-word characters
//     .replace(/--+/g, "-") // Replace multiple - with single -
//     .replace(/^-+/, "") // Trim - from start of text
//     .replace(/-+$/, "") // Trim - from end of text
// }

// const path = require(`path`)

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

const webpack = require("webpack")

exports.onCreateWebpackConfig = ({
  // stage,
  // rules,
  // loaders,
  // plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new webpack.IgnorePlugin(/^electron$/)],
  })
}
