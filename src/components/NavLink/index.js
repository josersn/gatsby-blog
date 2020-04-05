import React from 'react';
import content from "./content"
import { MenuList, MenuListItem, MenuListLink, Menu } from './styles';

const NavLink = () => (
     <Menu>
         <MenuList>
             
             {content.map((item, index) => (
                 <MenuListItem key={index}>
                     <MenuListLink activeClassName="active" to={item.url}>{item.name}</MenuListLink>
                 </MenuListItem>
             ))}
         </MenuList>
     </Menu>
)
export default NavLink;
