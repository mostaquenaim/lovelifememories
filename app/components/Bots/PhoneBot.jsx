import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PhoneBot = () => {
    return (
        <>
            <Link to='tel:+8801720087583'>
                <div className='fixed bottom-0 left-0 p-5 text-xl bg-red-600 text-white border-white border-2 rounded-full m-5 z-50'>
                    <AiFillPhone></AiFillPhone>
                </div>
            </Link>
        </>
    );
};

export default PhoneBot;