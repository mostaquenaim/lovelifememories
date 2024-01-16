'use client'
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const BOD = () => {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/BOD.json')
            .then((response) => response.json())
            .then((data) => {
                setDirectors(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [subDirectors, setSubDirectors] = useState([])

    useEffect(() => {
        fetch('/BOD-children.json')
            .then(res => res.json())
            .then(data => setSubDirectors(data))
    }, [])

    return (
        <>
            <div className="container mx-auto py-40">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">Board of Directors</h1>
                <div className="grid grid-cols-4 gap-8">
                    {
                        directors &&
                        directors.map((director) => (
                            <div key={director.id} className=" p-1 lg:p-4 rounded-lg col-span-2">
                                <div className="text-center">
                                    <Image
                                        width={150}
                                        height={150}
                                        src={director.image}
                                        alt={director.name}
                                        className="rounded-full h-14 w-14 md:w-20 md:h-20 lg:h-32 lg:w-32 mx-auto mb-4" />
                                    <h2 className="text-sm md:text-lg lg:text-xl font-semibold">{director.name}</h2>
                                    <p className="text-primary">{director.position}</p>
                                </div>
                                {/* <div className="mt-4 text-center">
                                <p className="text-gray-600">Email: <a href={`mailto:${director.email}`}>{director.email}</a></p>
                                <p className="text-gray-600">Phone: {director.phone}</p>
                                <p className="text-gray-600">
                                    <a href={director.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </p>
                            </div> */}
                            </div>
                        ))}
                </div>
                <div className="grid grid-cols-4 gap-8">
                    {
                        subDirectors &&
                        subDirectors.map((director) => (
                            <div key={director.id} className=" p-1 px-0 lg:p-4 rounded-lg">
                                <div className="text-center">
                                    <Image
                                        width={150}
                                        height={150}
                                        src={director.image}
                                        alt={director.name}
                                        className="rounded-full h-10 w-10 md:w-20 md:h-20 lg:h-32 lg:w-32 mx-auto mb-4" />
                                    <h2 className="text-xs md:text-lg lg:text-xl font-semibold">{director.name}</h2>
                                    <p className="text-primary text-xs md:text-lg">{director.position}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default BOD;
