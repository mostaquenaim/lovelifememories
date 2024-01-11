import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import ShowReview from "./ShowReview";

const Reviews = () => {
  // const reviews = useLoaderData()
  const [reviews, setReviews] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false); // Set loading to false when the fetch is complete
      })
      .catch(error => {
        // Handle any errors that occur during fetching
        console.error('Error fetching reviews:', error);
        setLoading(false); // Ensure loading is set to false even in case of errors
      });
  }, [setLoading]);


  return (
    <section className=" text-gray-600 body-font text-center pb-5">
      <div className="container px-5 pb-10 mx-auto">
        <h1
          // data-aos='zoom-in'
          className="text-3xl title-font text-primary font-bold mb-12 text-center mt-20">
          Reviews
        </h1>
        <a
          // data-aos='fade-up'
          href='https://www.facebook.com/LovelifeMemoriesBD/reviews' target='_blank'
          className='flex justify-center text-center mx-auto p-2 items-center 
          bg-blue-600 text-white w-48 rounded-lg gap-3 my-5 hover:text-blue-600 hover:bg-white duration-700'
          rel="noreferrer">
          <FaFacebookF></FaFacebookF> <span>Write a review</span>
        </a>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <ShowReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <a href="https://www.facebook.com/LovelifeMemoriesBD/reviews" target='_blank' rel="noreferrer">
        <button className='btn my-5 text-center mx-auto items-center flex bg-blue-300 hover:bg-blue-400'>
        <BsArrowUpRight />
          See Facebook Reviews
        </button></a>

    </section>
  );
};

export default Reviews;
