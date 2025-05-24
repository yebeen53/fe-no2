import React from "react";
import styled from "styled-components";
import { usePoketmonContext } from "../PoketmonContext";
import PoketmonCard from "./PoketmonCard";

const Container = styled.div`
  margin: 2rem 0;
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

const Dashboard = () => {
  const { selected, handleRemove } = usePoketmonContext();

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <CardsWrapper>
        {[...Array(6)].map((_, i) =>
          selected[i] ? (
            <PoketmonCard
              key={selected[i].id}
              pokemon={selected[i]}
              onClick={() => handleRemove(selected[i].id)}
              buttonLabel="삭제"
            />
          ) : (
            <EmptyBox key={`empty-${i}`}>포켓몬 선택</EmptyBox>
          )
        )}
      </CardsWrapper>
    </Container>
  );
};

export default Dashboard;
