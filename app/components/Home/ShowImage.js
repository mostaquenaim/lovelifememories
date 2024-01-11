// 'use client'
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import AOS from 'aos';

const ShowImages = () => {

    useEffect(() => {
        AOS.init({
            // You can customize AOS options here
            // duration: 200,
            easing: 'ease-in-out',
            // once: true, // Whether animation should happen only once
        });
    }, []);


    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);
    const [clickedImage, setClickedImage] = useState(null);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        // Create an array to hold your promises for fetching images
        const imagePromises = [];

        // Fetch images and push the promises into the array
        imagePromises.push(fetch('/images.json').then(res => res.json()));
        imagePromises.push(fetch('/images2.json').then(res => res.json()));

        // Use Promise.all to wait for all image fetches to complete
        Promise.all(imagePromises)
            .then(([data1, data2]) => {
                // Set the images when both fetches are done
                setImages(data1);
                setImages2(data2);
            })
            .catch(error => {
                // Handle any errors that occur during image fetching
                console.error('Error fetching images:', error);
            })
            .finally(() => {
                // Indicate that loading is now complete (whether there was an error or not)
                setLoading(false);
            });
    }, [setLoading]);


    const handleImageClick = (image) => {
        // Set the clicked image when an image is clicked
        setClickedImage(image);
    };

    const closeImageModal = () => {
        // Close the modal by resetting the clicked image
        setClickedImage(null);
    };

    return (
        <>
            <div className='pb-20 border-b-2'>
                <Marquee className="mt-10" pauseOnHover speed={50}>
                    {
                        images.map((image, index) => (
                            // <figure key={index} className='relative h-64 '>
                            <Image
                                key={index}
                                src={image.url}
                                alt={`A photo of ${image.title}`}
                                width={400}
                                height={150}
                                className="h-32 w-48 md:h-48 md:w-64 lg:h-64 lg:w-96 rounded-[28px] mr-2 md:mr-5 cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            />
                            // </figure>
                        )
                        )
                    }
                </Marquee>

                <Marquee className="mt-5" pauseOnHover speed={100}>
                    {
                        images2.map((image, index) => (
                            // <figure key={index}>
                            <Image
                                key={index}
                                src={image.url}
                                alt={`A photo of ${image.title}`}
                                width={400}
                                height={150}
                                className="h-32 w-48 md:h-48 md:w-64 lg:h-64 lg:w-96 rounded-[28px] mr-2 md:mr-5 cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            />
                            // </figure>
                        )
                        )
                    }
                </Marquee>

                {/* Modal to display the clicked image */}
                {clickedImage && (
                    <div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                        <div
                            data-aos='zoom-in'
                            className="max-w-3xl w-full p-5 bg-white rounded-lg relative">
                            <Image
                                src={clickedImage.url}
                                alt=""
                                width={500}
                                height={375}
                                layout="responsive" // Make the image responsive
                                className="max-w-full h-auto"
                            />
                            <button
                                onClick={closeImageModal}
                                className="absolute top-2 right-2 text-xl cursor-pointer text-black"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ShowImages;