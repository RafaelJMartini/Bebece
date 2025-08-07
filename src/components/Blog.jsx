import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./Blog.css";

const blogs = [
    {id: 1, img: "/images/Blog-1.svg", titulo: "NOVO LOGO, MESMA ESSÊNCIA.", descricao: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!", link: "Saiba Mais!" },
    { id: 2, img: "/images/Blog-2.svg", titulo: "É AMANHÃ", descricao: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️", link: "Saiba mais!" },
    { id: 3, img: "/images/Blog-3.svg", titulo: "DESCUBRA O GLAMOUR EM CADA PASSO.", descricao: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨", link: "Saiba mais!" },
];


      
      

export default function Blog() {
  return (
    <section className="blog-carrossel">
      <h2>Conheça mais</h2>
      <p>Fique por dentro de tudo que acontece na Bebecê</p>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        pagination={{ clickable: true}}
        modules={[Pagination]}
      >
        {blogs.map(({ id, img, titulo, descricao, link }) => (
          <SwiperSlide key={id} className="slide-blog">
            <img className="blog-img-container" src={img} alt={titulo} />
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p><a href="saibamais">{link}</a></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}