import React from 'react';
import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

const MenuBar = () => (
    <Container>
        
        <MenuBarGroup>

            <MenuBarLink to="/" title="Voltar para home">
                <MenuBarItem> <Home /> </MenuBarItem>
            </MenuBarLink> 

            <MenuBarLink to="/search" title="Pesquisar">
                <MenuBarItem><Search /></MenuBarItem>
            </MenuBarLink> 
        </MenuBarGroup>

        <MenuBarGroup>

            <MenuBarItem title="Mudar o Tema"> <Light /> </MenuBarItem>
            <MenuBarItem title="Mudar Visualização"><Grid /></MenuBarItem>
            <MenuBarItem title="Voltar ao Topo"><Arrow /></MenuBarItem>

        </MenuBarGroup>
 
    </Container>
)

export default MenuBar;