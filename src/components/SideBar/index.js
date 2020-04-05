import React from 'react';
import Header from "../Header";
import Menu from "../NavLink";
import { Container } from './styles';

const SideBar = () => {
  return (
  <Container>
      <Header />
      <Menu />
  </Container>
  )
}

export default SideBar;
