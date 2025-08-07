import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Card.css";
import { useCarrinho } from "../context/CarrinhoContext";

const produtos = [
    {id: 1, nome:"Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado", preco: "R$ 179,90", desconto: "", percent: "",  img: "/images/image7.png" },
    { id: 2, nome: "Coturno Feminino Bebecê Tratorado Detalhe Tachas", preco: "R$ 349,90", desconto: "R$315", percent: "10%", img: "/images/image8.png" },
    { id: 3, nome: "Scarpin Bebecê Salto Alto Taça Com Fivela", preco: "R$ 159,90", desconto: "", percent: "",  img: "/images/image9.png" },
];

export default function CardProduto() {

  const [favoritos, setFavoritos] = useState([]);
  const { adicionarAoCarrinho } = useCarrinho();
  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  return (
    <section className="card-carrossel">
      <h2>Lançamentos</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
      >
        {produtos.map(({ id, nome, preco, desconto, percent, img }) => (
          <SwiperSlide key={id} className="slide-card">
            <div className="card-img-container">
              <img src={img} alt={nome} />
              <button
                className="btn-favorito"
                onClick={() => toggleFavorito(id)}
                aria-label={favoritos.includes(id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <img
                  src={
                    favoritos.includes(id)
                      ? "/images/favorito-preenchido.svg"
                      : "/images/favorito.svg"
                  }
                  alt="Favoritar"
                />
              </button>
              <button className="btn-carrinho" onClick={adicionarAoCarrinho}>
                <img src="/images/add-vitrine.svg" alt="Adicionar pela vitrine"/>
              </button>
              {desconto && <span className="badge-desconto">{percent} OFF</span>}
            </div>
            <p className="texto">{nome}</p>
            {desconto ? (
              <p className="precos">
                <s>{preco}</s> <span className="preco">{desconto}</span>
              </p>
            ) : (
              <p className="preco">{preco}</p>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}