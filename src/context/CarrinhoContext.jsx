import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [showMsg, setShowMsg] = useState(false);

  const adicionarAoCarrinho = () => {
    setQuantidade(q => q + 1);

    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000);
  };

  return (
    <CarrinhoContext.Provider value={{ quantidade, adicionarAoCarrinho, showMsg }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}