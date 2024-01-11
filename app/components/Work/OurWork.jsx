import React from 'react';
import CenteredSwiper from '../Swiper/CenteredSwiper';
import SmallCenterSwiper from '../Swiper/SmallCenterSwiper';

const OurWork = () => {
    return (
        <div className='items-center text-center mx-auto my-10 space-y-3 pb-20 border-b-2'>
            <h1 className='text-4xl font-bold text-primary mb-20'
               // data-aos="zoom-in"
            >Our work</h1>
            <section className='hidden md:flex'>
                <CenteredSwiper></CenteredSwiper>
            </section>
            <section className='md:hidden'>
                <SmallCenterSwiper></SmallCenterSwiper>
            </section>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/eJ1yj4WaupE?si=HayVr_Ha8fvCAKUn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    );
};

export default OurWork;