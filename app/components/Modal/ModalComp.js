import Image from 'next/image';
import React from 'react';

const ModalComp = ({ isOpen, image, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute w-full h-full bg-black opacity-80" onClick={onClose}></div>
            <div
                data-aos="zoom-in-up"
                className="modal-container p-4 bg-white rounded-lg z-50">
                <Image
                    width={400}
                    height={850}
                    src={image}
                    alt="Modal"
                    className='max-h-[600px] max-w-full' />
            </div>
        </div>
    );
};

export default ModalComp;
