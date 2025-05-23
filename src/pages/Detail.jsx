import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:white;
`;

const PoketName=styled.h2`
color: red;
`

const PoketType=styled.p`
color:black;
`
const Discrip=styled.p`
color:black;
`

const PreBtn=styled.button`
width: 100px;
height: 50px;
color:black;
background-color:white;
border-radius: 10px;
&:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

`

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  return (
    <Container>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width="200" />
      <PoketName>{pokemon.korean_name}</PoketName>
      <PoketType>타입: {pokemon.types.join(", ")}</PoketType>
      <Discrip>{pokemon.description}</Discrip>
      <PreBtn onClick={() => navigate(-1)} color>뒤로 가기</PreBtn>
    </Container>
  );
};

export default Detail;
