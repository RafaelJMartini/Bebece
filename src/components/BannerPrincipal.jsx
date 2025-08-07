import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BannerPrincipal.css";

export default function BannerPrincipal() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="banner-swiper"
    >
      <SwiperSlide>
        <div className="banner-slide">
          <img src="/images/banner-principal-1.svg" alt="Banner 1" />
          <button className="btn-conheca">Conheça agora!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-slide">
          <img src="/images/banner-principal-2.svg" alt="Banner 2" />
          <button className="btn-conheca">Conheça agora!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-slide">
          <img src="/images/banner-principal-3.svg" alt="Banner 3" />
          <button className="btn-conheca">Conheça agora!</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}