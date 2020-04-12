import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import Paginator from "../components/Paginator";
import {Container as List} from "../components/List/styled";

const BlogList = props => {
    const post = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage -1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
 
    return (
        <Layout>
        <SEO title="Home" />
        <List>
        {post.map(({node:{frontmatter:{title, date,description,category,background}, timeToRead, fields: {slug}} }, index) => (
          <Post 
          key={index}
          slug={slug}
          category={category}
          background={background}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
          />
        ))}
        </List>
        
        <Paginator 
          isFirst={isFirst}
          isLast={isLast}
          currentlyPage={currentPage}
          numberPage={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Layout>
    )
}

export const query = graphql`
query AllPosts($skip:  Int!, $limit: Int!) {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}
         limit: $limit
         skip: $skip
         ) {
      edges {
        node {
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            category
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
  
`; 

export default BlogList;