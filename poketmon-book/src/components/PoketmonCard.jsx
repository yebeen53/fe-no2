import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePoketmonContext } from "../PoketmonContext";

const Card = styled.div`
  border-radius: 10px;
  padding: 1rem;
  width: 150px;
  height: 250px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const ClickBtn = styled.button`
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 5px;
  background-color: red;
  color : white
`;

const PoketmonCard = ({ pokemon, onClick, buttonLabel = "추가" }) => {
  const navigate = useNavigate();
  const { handleAdd } = usePoketmonContext();

  return (
    <Card>
      <div onClick={() => navigate(`/detail/${pokemon.id}`)}>
        <Image src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <p>No: {pokemon.id}</p>
      </div>
      {buttonLabel === "추가" ? (
        <ClickBtn onClick={() => handleAdd(pokemon)}>{buttonLabel}</ClickBtn>
      ) : (
        <ClickBtn onClick={onClick}>
          {buttonLabel}
        </ClickBtn>
      )}
    </Card>
  );
};

export default PoketmonCard;
