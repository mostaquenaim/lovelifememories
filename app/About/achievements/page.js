'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Achievements = () => {
    const [achievements, setAchievements] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/achievements.json');
                const data = await response.json();
                setAchievements(data);
                console.log(data, "14");
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-40">
            <h1 className="text-3xl font-bold text-primary text-center mb-6">Our Achievements</h1>

            <div className="stats shadow bg-secondary text-neutral
            flex flex-col lg:flex-row justify-center text-center items-center mx-auto w-2/3">

                <div className="stat w-64 ">
                    <div className="stat-title">Events</div>
                    <div className="stat-value">2500+</div>
                    <div className="stat-desc">with positive customer feedback</div>
                </div>

                <div className="stat w-64 border-none">
                    <div className="stat-title">Experience</div>
                    <div className="stat-value">7+ <span className='opacity-60 text-lg'>years</span></div>
                    <div className="stat-desc">June 2016 - current</div>
                </div>

                <div className="stat w-64 border-none">
                    <div className="stat-title">Average Rating</div>
                    <div className="stat-value">4.9 <span className='opacity-60 text-lg'>stars</span></div>
                    <div className="stat-desc">200K+ Social Media followers</div>
                </div>

            </div>

            <h2 className='mt-16 mb-5 ml-5 text-3xl font-bold'>We were Featured in these News Portals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements && achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className="border border-gray-300 p-4 rounded-md">
                        <Image
                            width={400}
                            height={100}
                            src={achievement.logo} 
                            alt={`${achievement.title} logo`}/>
                        <h2 className="text-xl font-bold text-primary">
                            {achievement.title}
                        </h2>
                        <p className="text-gray-600">Published on {achievement.date}</p>
                        <p className="mt-2">{achievement.description}</p>
                        <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
