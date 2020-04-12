import React, { useState, useEffect} from 'react';
import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ViewList as List} from "@styled-icons/heroicons-outline/ViewList";

const MenuBar = () => {

    const [theme, setTheme] = useState(null);
    const [display, setDisplay] = useState(null);

    const isDarkMode = theme === "dark";
    const isListMode = display === "list";

    useEffect(() => {
        setTheme(window.__theme)
        setTheme(window.display)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
      }, [])

    return(
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

            <MenuBarItem title="Mudar o Tema"
            onClick={() => {
                window.__setPreferredTheme(isDarkMode ? "light" : "dark")
              }}
              className={theme}
            > <Light /> </MenuBarItem>

            <MenuBarItem title="Mudar Visualização"
             onClick={() => {
                window.__setPreferredDisplay(isListMode ? "grid" : "list")
              }}
              className="display"
            >
                {isListMode ? <Grid /> : <List />}
            </MenuBarItem>
            <MenuBarItem title="Voltar ao Topo"><Arrow /></MenuBarItem>

        </MenuBarGroup>
 
    </Container>
    )
}
export default MenuBar;