import styled from 'styled-components';
import Img from "gatsby-image";
import media from "styled-media-query"; 


export const Container = styled(Img)`
 margin: auto;
 height: 3.73rem;
 width: 100%;
  
 ${media.lessThan("large")`
    width: 40% ;
    margin-left: 20px;
    `}
`;
