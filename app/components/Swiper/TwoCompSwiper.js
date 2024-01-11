
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from 'swiper/modules';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const TwoCompSwiper = ({ images }) => {
    return (
        <Swiper
            modules={[
                Autoplay,
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade
            ]}
            loop
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false, // Optional, but recommended
            }}
            effect='fade'

            // navigation={{
            //     nextEl: '.swiper-button-next', // Specify the custom class
            //     prevEl: '.swiper-button-prev', // Specify the custom class
            // }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                images && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            alt=""
                            width={1600}
                            height={400}
                            // className='w-full'
                        />
                    </SwiperSlide>
                ))

            }

        </Swiper>
    );
};

TwoCompSwiper.propTypes = {
    images: PropTypes.array.isRequired,
};

export default TwoCompSwiper
