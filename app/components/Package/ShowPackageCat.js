import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ShowPackageCat = ({ item }) => {
    const { name, image, id } = item
    const router = useRouter()

    const handleClick = () => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        router.push('/show-package', { scroll: false })
    }

    return (
        <>
            <div data-aos="fade-down"
                className="shadow-lg p-5"
            >
                <figure className='relative h-[450px] w-full bg-black'>
                    <Image
                        width={400}
                        height={850}
                        src={image}
                        alt=""
                        className='h-[450px] w-full bg-black opacity-50' />
                    {/* <div className='absolute h-full bg-black z-20 w-full'></div> */}
                    <div className="transition absolute inset-0 flex flex-col items-center justify-end text-center group">
                        <h2 className="text-lg font-bold text-base-100 group-hover:-translate-y-48 duration-500 uppercase">{name}</h2>
                        {/* <Link
                            // href={`/show-package/${id}`},
                            href={{
                                pathname: `/show-package`,
                                query: {
                                    item: item
                                },
                            }}
                            as={`/show-package`}
                        > */}
                            <button
                                onClick={handleClick}
                                className=" 
                        opacity-0
                        group-hover:opacity-100
                        btn mt-4 text-primary bg-secondary 
                        group-hover:-translate-y-48 
                        delay-300 duration-500
                        hover:bg-primary hover:text-secondary
                        ">
                                CHECK OUT
                            </button>
                        {/* </Link> */}
                    </div>
                </figure>

            </div>
        </>
    );
};

export default ShowPackageCat;