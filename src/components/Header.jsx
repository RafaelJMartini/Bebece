import React, { useEffect, useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [aberto, setAberto] = useState({});
  const { quantidade, showMsg } = useCarrinho();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const toggleCategoria = (categoria) => {
    setAberto((prev) => ({ ...prev, [categoria]: !prev[categoria] }));
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-side">
          <button id="menuBtn" onClick={() => setMenuAberto(true)}>
          <img src={scrolled ? "/icons/icone-menu-preto.svg" : "/icons/icone-menu.svg"} alt="Menu" />
          </button>
          <img src={scrolled ? "/icons/icone-search-preto.svg" : "/icons/icone-search.svg"} alt="Buscar" />
        </div>

        <div className="header-title">
          <img 
            src={scrolled ? "/images/logo-preto.svg" : "/images/logo-branco.svg"}
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="header-side">
          <img src={scrolled ? "/icons/icone-conta-preto.svg" : "/icons/icone-conta.svg"} alt="Perfil" />
          <div className="carrinho-container">
            <img src={scrolled ? "/icons/icone-carrinho-preto.svg" : "/icons/icone-carrinho.svg"} alt="Carrinho" />
            {quantidade > 0 && <span className="contador-carrinho">{quantidade}</span>}
          </div>
        </div>
      </header>

      {showMsg && (
        <div className="mensagem-carrinho">
          Produto adicionado ao carrinho!
        </div>
      )}


      <nav id="menuLateral" className={menuAberto ? "aberto" : ""}>
        <button id="fecharBtn" onClick={() => setMenuAberto(false)}>✖</button>
        <ul>
          <li>Liquida</li>

          {/* Categoria com sanfona */}
          <li onClick={() => toggleCategoria("sapatos")} className="categoria">
            Sapatos <span className="seta">{aberto.sapatos ? "˅" : "›"}</span>
          </li>
          {aberto.sapatos && (
            <ul className="submenu">
              <li>Scarpins</li>
              <li>Mocassim</li>
              <li>Sapatilhas</li>
              <li>Mules</li>
              <li>Peep Toe</li>
              <li>Oxford</li>
            </ul>
          )}

          <li onClick={() => toggleCategoria("sandalias")} className="categoria">
            Sandálias <span className="seta">{aberto.sandalias ? "˅" : "›"}</span>
          </li>
          {aberto.sandalias && (
            <ul className="submenu">
              <li>itens</li>
            </ul>
          )}

          <li onClick={() => toggleCategoria("botas")} className="categoria">
            Botas <span className="seta">{aberto.botas ? "˅" : "›"}</span>
          </li>
          {aberto.botas && (
            <ul className="submenu">
              <li>itens</li>
            </ul>
          )}

          <li onClick={() => toggleCategoria("tenis")} className="categoria">
            Tênis <span className="seta">{aberto.tenis ? "˅" : "›"}</span>
          </li>
          {aberto.tenis && (
            <ul className="submenu">
              <li>itens</li>
            </ul>
          )}
          
          <li>Outlet</li>
        </ul>
      </nav>
    </>
  );
}