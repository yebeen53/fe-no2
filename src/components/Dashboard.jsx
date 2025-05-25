import React from "react";
import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";

const Container = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: #e2e1e1;
  border-radius: 12px;
`;

const Title = styled.h2`
  text-align: center;
  color: red;
  margin-bottom: 1rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const EmptyBox = styled.div`
  width: 150px;
  height: 150px; 
  border: 2px dashed black;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;

const Dashboard = ({ selected, onRemove }) => {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    if (selected[i]) {
      cards.push(
        <PoketmonCard
          key={selected[i].id}
          pokemon={selected[i]}
          onClick={() => onRemove(selected[i].id)}
          buttonLabel="삭제"
        />
      );
    } else {
      cards.push(
        <EmptyBox key={`empty-${i}`}>포켓몬 선택</EmptyBox>
      );
    }
  }

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <CardsWrapper>{cards}</CardsWrapper>
    </Container>
  );
};


export default Dashboard;
