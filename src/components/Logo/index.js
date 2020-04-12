import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
// import { Container } from './styles';
import * as S from "./styles"; 
const Logo = () => {
  const { Logotype } = useStaticQuery(
      graphql`
        query{
            Logotype: file(relativePath: {eq: "logo.png"}){
                childImageSharp{
                    fluid(maxWidth: 200){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      `
  )
  return <S.Container  fluid={Logotype.childImageSharp.fluid} />
}

export default Logo;