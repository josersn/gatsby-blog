import React from 'react';
import propTypes from "prop-types";
import { Container, RecommendedLink } from './styles';

const RecommendPosts = ({next, prev}) => (
    <Container>
        {
            prev && (
                <RecommendedLink to={prev.fields.slug} className="previous">
                    {prev.frontmatter.title}
                </RecommendedLink>
                )
                }
        
                {next && (
                <RecommendedLink to={next.fields.slug} className="next">
                    {next.frontmatter.title}
                </RecommendedLink>
                )
        } 
        
    </Container>
)
RecommendPosts.propTypes = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    }),
    prev: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    })
}


export default RecommendPosts;