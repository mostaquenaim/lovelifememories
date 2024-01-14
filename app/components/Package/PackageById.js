'use client'
import Link from 'next/link';
import React from 'react';
import { BsAlipay, BsFillTelephoneFill, BsPaypal } from 'react-icons/bs';
import { MdPayment } from "react-icons/md";

const PackageById = ({ item }) => {
    const { packages } = item;
    const phoneNo = '+8801720087583'
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5 mb-16'>
                {packages &&
                    packages.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-down"
                            className={`shadow-lg p-10 rounded-lg text-center bg-secondary bg-opacity-60 ${index + 1 === packages.length && index % 3 === 0 && `lg:cols-span-3`}`}>
                            <div  >
                                <h2 className="text-lg font-bold text-neutral mb-5">{item.name}</h2>

                                {
                                    item?.details ? item.details.map((detail, index) => (
                                        <p className='opacity-80' key={index}>{detail}</p>
                                    ))
                                        :
                                        <img src={item.image} alt="" />
                                }
                                <Link href={`tel:${phoneNo}`}>
                                    <button className="btn btn-md mt-10 text-white bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-50" >
                                        <BsFillTelephoneFill />
                                        Book Now!
                                    </button>
                                </Link>

                                <Link href='/payment'>
                                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                                        <MdPayment />
                                        Pay Now!
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}
            </div>
            <div className="text-center mt-20 mb-10 mx-10 md:mx-48 lg:mx-64">
                <h2 className="text-xl font-semibold text-primary">Why Choose Our Packages?</h2>
                <p className="mt-3">
                    Our photography packages are designed to capture your special moments in the best possible way. With our team of skilled photographers and cinematographers, you can trust us to deliver top-notch services for your events.
                </p>
                <p>
                    For inquiries and bookings, feel free to reach out to us. We're here to make your memories unforgettable.
                </p>
            </div>
        </>
    );
};

export default PackageById;
