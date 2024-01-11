import React from 'react';
import CenteredSwiper from '../../Swiper/CenteredSwiper';
import SmallCenterSwiper from '../../Swiper/SmallCenterSwiper';

const OurWork = () => {
    return (
        <div className='items-center text-center mx-auto my-10 space-y-3 pb-20 border-b-2'>
            <h1 className='text-4xl font-bold text-primary mb-20'>
                Our work
            </h1>
            <section className='hidden md:flex'>
                <CenteredSwiper></CenteredSwiper>
            </section>
            <section className='md:hidden'>
                <SmallCenterSwiper></SmallCenterSwiper>
            </section>
        </div>
    );
};

export default OurWork;