import React, { useState } from 'react';
import ModalComp from '../Modal/ModalComp';
import Image from 'next/image';

const Photo = ({ item }) => {
    const { image, date } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="shadow-lg">
            <figure className="relative h-[500px] w-full bg-black group rounded-xl">
                <Image
                    width={400}
                    height={850}
                    src={image}
                    alt=""
                    className="h-[500px] w-full bg-black opacity-50 rounded-xl" />
                <div className="transition absolute inset-0 flex justify-between items-end text-end m-5">
                    <span className="text-base-100 opacity-0 group-hover:opacity-60 duration-500">{date}</span>
                    <button
                        className="btn opacity-0 group-hover:opacity-100 bg-secondary text-primary hover:bg-primary hover:text-secondary"
                        onClick={openModal}
                    >
                        View
                    </button>
                </div>
            </figure>
            <ModalComp isOpen={isModalOpen} image={image} onClose={closeModal} />
        </div>
    );
};

export default Photo;
