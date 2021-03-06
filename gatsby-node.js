const path= require("path"); 
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {
      // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
      const slug = createFilePath({
        node,
        getNode,
        basePath: "pages",
      })
  
      // Creates new query'able field with name of 'slug'
      createNodeField({
        node,
        name: "slug",
        value: `/${slug.slice(12)}`,
      })
    } 
  }
  

exports.createPages = ({graphql, actions}) => {
    const { createPage }  = actions;

    return graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              category
              background
              image
            }
            timeToRead
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node, next, previous }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
              previousPost: next,
              nextPost: previous
            },
          })
        })

      const PostPerPage = 4;
      const numPages = Math.ceil(posts.length / PostPerPage);
      
      Array.from({ length: numPages }).forEach((_, index) => {
        
        createPage({
          path: index === 0 ? `/` : `/page/${index + 1}`,
          component: path.resolve(`./src/templates/blog-list.js`),
           context: {
              limit: 4,
              skip: index * 4,
              numPages,
              currentPage: index + 1
           }
         })
      });

      })
}
