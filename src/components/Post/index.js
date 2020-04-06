import React from "react";
import PropTypes from "prop-types";

import { PostLink, background, Container, PostTag, PostTitle, PostInfo, PostDate, PostDescription } from "./styles.js";
 
const Post = ({ slug, category,background, date,timeToRead, title, description }) => (
    <PostLink to={slug}>
        <Container>
            <PostTag background={background}>{category}</PostTag>
            <PostInfo>
                <PostDate>{date} |  {timeToRead} min de leitura</PostDate>
            <PostTitle>{title}</PostTitle>
            <PostDescription>{description}</PostDescription>
            </PostInfo>
        </Container>
    </PostLink>
)
Post.propType = {
    slug : PropTypes.string.isRequired,
    category : PropTypes.string.isRequired,
    background : PropTypes.string,
    date : PropTypes.string.isRequired,
    timeToRead : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}
export default Post;