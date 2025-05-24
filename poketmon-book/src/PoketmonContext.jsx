import React, { createContext, useContext, useState } from "react";

const PoketmonContext = createContext();

export const PoketmonProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (!selected.find((p) => p.id === pokemon.id)) {
      if (selected.length >= 6) {
        alert("더 이상 선택할 수 없습니다.");
        return;
      }
      setSelected([...selected, pokemon]);
    } else {
      alert("이미 선택된 포켓몬입니다.");
    }
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <PoketmonContext.Provider value={{ selected, handleAdd, handleRemove }}>
      {children}
    </PoketmonContext.Provider>
  );
};

export const usePoketmonContext = () => useContext(PoketmonContext);
