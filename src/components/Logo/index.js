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
                    fixed(width: 200, height:  64){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
      `
  )
  return <S.Container  fixed={Logotype.childImageSharp.fixed} />
}

export default Logo;