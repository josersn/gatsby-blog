import styled from 'styled-components';
import media from "styled-media-query";
export const Container = styled.section`
  /* background: #007bff; */
  display: flex;
  color: #8899a6;
  flex-direction: column;
   p {
     margin: 1rem 0;
   }

   ${media.lessThan("large")`
    flex-direction: row ;
    width: 500px;
    align-items: center;
   `}
   ${media.lessThan("600px")`
    p{
      display: none;
    }
   `}
`;
