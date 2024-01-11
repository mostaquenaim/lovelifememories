import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const SmallCenterSwiper = () => {
    const iframeClass = 'w-full h-96'
    return (
        <>
            <Swiper
                data-aos="fade-right"
                slidesPerView={1}
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
                        src="https://www.youtube.com/embed/eJ1yj4WaupE?si=CekPGmt_AAFn7MLV&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/26C7pptL66g?si=0XaSDKn0dDaHiBCh&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/v1dDWhOsirc?si=UwdvyG9OLJqhV2mb&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/c0wFowxRbuY?si=SaX1PuJx2XQpUVDi&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/Y2nBWVdavbs?si=-1dSXev1Og1-_S70&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/tEELPwzOnG4?si=CdIKIjjhDdVr7jCm&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className={iframeClass}
                        src="https://www.youtube.com/embed/i5C3k1r-D6o?si=oJ_1aJQohCaqFMS3&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SmallCenterSwiper;