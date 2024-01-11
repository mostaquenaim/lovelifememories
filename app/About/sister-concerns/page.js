'use client'
import React, { useEffect, useState } from 'react';

const SisterConcerns = () => {
    const [sisterConcerns, setSisterConcerns] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/sisters.json');
          const data = await response.json();
          setSisterConcerns(data);
          console.log(data, "14");
        } catch (error) {
          console.error('Error fetching banner data:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
            <div className="container mx-auto py-40">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">Sister Concerns</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sisterConcerns && sisterConcerns.map((sisterConcern, index) => (
                        <div key={index} className="border p-4 rounded-md group">
                            <a
                                href={sisterConcern.facebook}
                                target='_blank'
                                rel="noreferrer">
                                <div className="text-center mb-4">
                                    <img src={sisterConcern.image} alt={sisterConcern.name} className="w-36 h-36 mx-auto rounded-full hover:border-2 border-red-600" />
                                </div>
                            </a>
                            <h2 className="text-lg font-bold text-primary text-center mb-2">{sisterConcern.name}</h2>
                             <p className="text-gray-600 text-center font-semibold text-lg">{sisterConcern.tagline}</p>
                             <p className="text-gray-600 text-center translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-70 duration-300">{sisterConcern.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SisterConcerns;
