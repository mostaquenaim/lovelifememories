'use client'
import { useEffect, useState } from "react";

const JoinTeam = () => {

    const [availablePositions, setAvailablePositions] = useState([])

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/available-positions.json')
            .then((response) => response.json())
            .then((data) => {
                setAvailablePositions(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const email = 'lovelifememories@gmail.com';

    return (
        <div className="container mx-auto py-40">
            <h1 className="text-3xl font-bold text-primary text-center mb-8">Join Our Team</h1>
            <div className="text-center">
                <p className="text-gray-600 mb-4 px-5">
                    We are always looking for talented and passionate individuals to join our team.
                </p>
                <p className="text-gray-600 mx-5">
                    If you are interested in becoming part of LoveLife Memories, please send your resume and a cover letter to our HR department at <a className="font-semibold hover:opacity-80" href={`mailto:${email}`}>{email}</a>
                </p>
            </div>

            {/* Display available positions */}
            <div className="mt-10 flex flex-col justify-center w-full items-center">
                <h2 className="text-2xl font-semibold text-primary mb-4 px-5">Available Positions</h2>



                <div className="text-gray-600 px-5 space-y-2">

                    {
                        availablePositions.map((position) => (
                            <div key={position.id} className="collapse collapse-plus md:w-96 bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    {position.position}
                                    {/* - <small>{position.location}</small> */}
                                </div>
                                <div className="collapse-content">
                                    {/* <p>{position.description}</p>
                                    <h4 className="font-semibold mt-2">Requirements:</h4>
                                    <ul>
                                        {position.requirements.map((requirement, index) => (
                                            <li key={index}>{requirement}</li>
                                        ))}
                                    </ul>
                                    <h4 className="font-semibold mt-2">Responsibilities:</h4>
                                    <ul>
                                        {position.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </ul> */}
                                    <p className="text-sm md:text-base lg:text-lg mb-8">
                                        Contact Us for more
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default JoinTeam;
