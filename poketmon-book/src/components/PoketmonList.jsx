import React from "react";
import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  background-color: #e5e4e4;
`; 
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:2rem;
  gap:1rem;
  margin-bottom: 2rem;
  margin-left: 7rem;
`;

const PoketmonList = ({ poketmons = [] }) => {
  return (
    <Container>
      <CardList>
      {poketmons.map((pokemon) => (
        <PoketmonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      </CardList>
    </Container>
  );
};

export default PoketmonList;
