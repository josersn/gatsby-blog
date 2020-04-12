import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "gatsby";

export const Container = styled.div`
  
`;

export const Menu = styled.nav ``;
export const MenuList = styled.ul `
    font-size:  1.2rem;
    font-weight: 300;
    ${media.lessThan("large")`
    display: none;
  `}
`
;
export const MenuListItem = styled.ul `
    padding: 0.5rem 0;

    .active{
        color: #1fa1f2;
    }
`;


export const MenuListLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.3s; 
    ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}

    &:hover{
        color: #1fa1f2;
    }
`;