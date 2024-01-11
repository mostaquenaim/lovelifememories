import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const CenteredSwiper = () => {
    const iframeClass = 'w-[400px] h-[200px] lg:w-[800px] lg:h-[400px]'
    return (
        <>
            <Swiper
                // data-aos="fade-right"
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                navigation
                modules={[
                    Pagination,
                    Navigation
                ]}
                className="mySwiper overflow-hidden"
            >
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/gjAGVhu6JtI?si=3TcububugjedNv_v&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/3Qs_C9uxNjc?si=1HaO6g3gcvAh6lcD&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/nNVC2_hxiI0?si=Q5OFDFdDrTAE5Jjq&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/NY_dogO0taM?si=L-GS2BMeIzSbPusN&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/i5C3k1r-D6o?si=zYD5w1vUSfZz84NR&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/0FltmpvgcVI?si=u5g2jRMfxdK-0YUl&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/f0Dm7EoZYSo?si=TfhJWxNetQRKa0p6&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/MeJffbu3wTY?si=GAdekXNuSSZce2iV&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/famjoD93DX8?si=QMafl-FAarTbmLq9&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/cg0ftL0r2AY?si=P-LgZ5Ux3m54-zwC&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CenteredSwiper;