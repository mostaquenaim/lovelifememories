'use client'
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const WhyUs = () => {
    const [reasons, setReasons] = useState([])

    useEffect(() => {
        fetch('/WhyUs.json')
            .then(res => res.json())
            .then(data => setReasons(data))
    }, [])

    return (
        <>
            <div className="pt-40">
                <section
                    id="why-choose-us"
                    className="relative block px-6 pb-10 lg:py-20 md:px-10 border-neutral-900 ">
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span
                            // data-aos="zoom-in"
                            className="text-primary my-3 flex items-center justify-center uppercase tracking-wider text-3xl font-bold">
                            Why Choose Us
                        </span>
                        <h2
                            // data-aos="fade-up"
                            className="block w-full bg-black bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Capturing Moments, Creating Memories
                        </h2>
                        <p
                            // data-aos="fade-up"
                            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                            At LoveLife Memories, we are committed to preserving your most precious moments. Our dedication to quality,
                            creativity, and service sets us apart.
                        </p>
                    </div>
                    {/* reasons  */}
                    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                        {/* reason 1 */}
                        {
                            reasons.map((reason, index) => (
                                // <div key={index}>test</div>
                                <div
                                    key={index}
                                    // data-aos='zoom-in'
                                    className="rounded-md shadow-lg shadow-gray-500 bg-gradient-to-b from-neutral to-red-400 p-8 text-center">
                                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md "
                                    >
                                        <Image
                                            src={reason.icon}
                                            width={50}
                                            height={50}
                                            alt="" />
                                    </div>
                                    <h3 className="mt-6 text-base-100 text-xl font-semibold">{reason.Title}</h3>
                                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100 opacity-80">{reason.Description}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    >
                    </div>
                    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    >
                    </div>
                </section>
            </div>
        </>

    );
};

export default WhyUs;