import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Categorias.css";

const categorias = [
    {id: 1, nome:"Botas", img: "/images/banner-botas.svg" },
    { id: 2, nome: "Scarpins", img: "/images/banner-scarpins.svg" },
    { id: 3, nome: "Sapatilhas", img: "/images/banner-sapatilhas.svg" },
    { id: 4, nome: "Sandálias", img: "/images/banner-sandalias.svg" },
];

export default function BannerCategorias() {
  return (
    <section className="categoria-carrossel">
      <h2>Categorias</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
      >
        {categorias.map(({ id, nome, img }) => (
          <SwiperSlide key={id} className="slide-categoria">
            <img src={img} alt={nome} />
            <p>{nome}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}