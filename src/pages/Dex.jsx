import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PoketmonList from "../components/PoketmonList";
import MOCK_DATA from "../data/mock";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
`;

const List = styled.section`
  background-color: #e2e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  
`;
const Dex = () => {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <Wrapper>
      <Dashboard selected={selected} onRemove={handleRemove} />

      <List>
        <PoketmonList poketmons={MOCK_DATA} onAddPoketmon={handleAdd} />
      </List>
    </Wrapper>
  );
};

export default Dex;
