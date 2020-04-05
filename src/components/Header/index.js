import React from 'react';
import { useStaticQuery, graphql  } from 'gatsby';

import Logo from "../Logo";

import { Container } from './styles';

const Header = () => {
    const {
        site: {
            siteMetadata : {description}
        }
    } = useStaticQuery(graphql`
    query HeaderQuery {
      site { 
        siteMetadata {
          description
        }
      }
    }
  `) 

      return (
        <Container>
        <Logo />
        <p>{ description }</p>
        </Container>
      )
}
export default Header; 