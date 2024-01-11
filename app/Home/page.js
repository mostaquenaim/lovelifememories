'use client'
import { useEffect, useState } from 'react';
import TwoCompSwiper from '../components/Swiper/TwoCompSwiper';
import ShowImages from '../components/Home/ShowImage';
import WhyUs from '../About/why-us/page';
import OurWork from '../components/Home/Work/OurWork';
import Reviews from '../components/Home/Review/Reviews';


const HomePage = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/banners.json');
        const data = await response.json();
        setBannerData(data);
        console.log(data, "14");
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <figure className="relative">
        {
          bannerData &&
          <TwoCompSwiper images={bannerData}></TwoCompSwiper>
        }
        <div className="hidden lg:inline-block absolute h-full top-0 opacity-50  w-full bg-black"></div>
      </figure>

      <section className="shadow-md">
        <ShowImages></ShowImages>
      </section>

      <section className="-mt-36 shadow-md">
        <WhyUs></WhyUs>
      </section>

      <section className="shadow-md">
        <OurWork></OurWork>
      </section>

      <section className="shadow-md">
        <Reviews></Reviews>
      </section>

    </div>
  );
};

export default HomePage;
