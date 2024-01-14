import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";

const ShowPackage = ({ item }) => {
    const { name, description, price, id, color } = item;
    const navigate = useNavigate();

    const handleClick = () => {
        // You can add your logic here to handle the click event, e.g., navigate to a specific page.
        // Example:
        // navigate(`/package-details/${id}`);
    };
    const textStyle = {
        color: color
    }
    const bgStyle = {
        backgroundColor: color
    }

    // Split the description by line breaks ("\n") and render each part as a separate <p> element
    const descriptionParts = description.split('\n');

    return (
        <div data-aos="fade-down"
            className="shadow-lg p-10"
            onClick={handleClick}
        >
            <div className="text-center">
                <h2 className="text-2xl font-bold" style={textStyle}>{name}</h2>
                {descriptionParts.map((part, index) => (
                    <p key={index} className="mt-2">{part}</p>
                ))}
                <p className="mt-2 font-semibold">{price}</p> {/* Display the price here */}
                <a href="tel:+8801720087583">
                    <button className="btn mt-10 text-white" style={bgStyle}>
                        <BsFillTelephoneFill/>
                        Book Now!
                        </button>
                </a>
            </div>
        </div>
    );
};

export default ShowPackage;
