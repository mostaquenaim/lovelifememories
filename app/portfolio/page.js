'use client'
import { useEffect, useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import Photo from '../components/Portfolio/Photo';

const Portfolio = () => {
  const [isPhotosSelected, setIsPhotosSelected] = useState(true);
  const [videos, setVideos] = useState([])
  const [photos, setPhotos] = useState([])

  const [limit, setLimit] = useState(8)
  const [videoLimit, setVideoLimit] = useState(8)

  console.log(photos)

  useEffect(() => {

    fetch('/portfolio-photos.json')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        console.log(data,"22");
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
    
    // Fetch the JSON data from the public folder
    fetch('/youtube.json')
      .then((response) => response.json())
      .then((data) => { 
        setVideos(data);
        console.log(data,"youtube");
        setVideoLimit(data.length > 6 ? 6 : data.length);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleToggle = (isPhotos) => {
    setIsPhotosSelected(isPhotos);
  };

  return (
    <div className="container mx-auto pb-10 pt-40">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-primary">Portfolio</h1>
      </header>
      <section className="mt-6 text-center">
        <p className="text-gray-600">
          Welcome to our portfolio page. Explore our collection of photos and videos from various projects and events.
        </p>
      </section>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handleToggle(true)}
          className={`${isPhotosSelected ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
            } px-4 py-2 rounded-l-lg`}
        >
          Photos
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`${isPhotosSelected ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
            } px-4 py-2 rounded-r-lg`}
        >
          Videos
        </button>
      </div>
      <div className="mt-8">
        {isPhotosSelected ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5">
              {
                photos.slice(0, limit).map((photo, index) => (
                  <Photo key={index} item={photo}></Photo>
                ))
              }
            </div>
            <button onClick={() => setLimit(photos.length)} className={limit >= photos.length ? `hidden` : `btn my-5 text-center mx-auto items-center flex`}>Load more photos</button>
            <button
              onClick={() => window.location.href = 'https://www.instagram.com/lovelifememories_bd/'}
              className={limit >= photos.length ? `btn my-5 text-center mx-auto items-center flex border-red-600 bg-gradient-to-r from-[#ff0062] to-[#fece00] ` : `hidden`}
            >
              <FaInstagram className='text-lg'></FaInstagram>
              Explore more
            </button>

          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-5">
              {
                videos.slice(0, videoLimit).map((video, index) => (
                  <iframe key={index} className='h-[300px] w-full' src={video} title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ))
              }
            </div>
            <button onClick={() => setVideoLimit(videos.length)} className={videoLimit >= videos.length ? `hidden` : `btn my-5 text-center mx-auto items-center flex`}>Load more</button>
            <button
              onClick={() => window.location.href = 'https://www.youtube.com/@lovelifememoriesbd'}
              className={videoLimit >= videos.length ? `btn my-5 text-center mx-auto items-center flex text-white bg-red-700 hover:bg-red-500` : `hidden`}
            >
              <FaYoutube className='text-lg'></FaYoutube>
              Explore more
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
