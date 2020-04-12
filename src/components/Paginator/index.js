import React from 'react';
import propTypes from "prop-types";
import { Link } from "gatsby";
import { Container } from './styles';

const Paginator = ({ isFirst, isLast, currentlyPage, numberPage, prevPage, nextPage}) => (
  <Container>
      {!isFirst && 
      <Link to={prevPage}>
        Página Anterior
      </Link>
      }

      <p>
      {currentlyPage} de {numberPage}
       </p>

      {!isLast && 
      <Link to={nextPage}>
              Próxima página 
      </Link>
      }
  </Container>
)
Paginator.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentlyPage: propTypes.number.isRequired,
    numberPage: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
} 
export default Paginator;
