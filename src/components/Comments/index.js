import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import propTypes from "prop-types";

import { Container, CommentsTitle } from './styles';

const Comments = ({url, title}) => {
    const completeURL = `http://josersn.github.io/${url}`;
    console.log()
    return (
   <Container>
       <CommentsTitle>Comentários</CommentsTitle>
       <ReactDisqusComments
        shortname="josersn"
        identifier={completeURL}
        title={title} 
        url={completeURL}
      />
    </Container>     
    )
}
Comments.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  }
export default Comments;