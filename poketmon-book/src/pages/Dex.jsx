import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PoketmonList from "../components/PoketmonList";
import MOCK_DATA from "../data/mock";

const Wrapper = styled.div`
  padding: 2rem;
`;

const Dex = () => {
  return (
    <Wrapper>
      <Dashboard />
      <PoketmonList poketmons={MOCK_DATA} />
    </Wrapper>
  );
};

export default Dex;
