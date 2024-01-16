'use client'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ImCross } from 'react-icons/im';
import { useRouter } from 'next/navigation'
import { ProjectContext } from '../context/Provider';
import ShowPackageCat from '../components/Package/ShowPackageCat';
import FAQ from '../components/FAQ/FAQ';
import Image from 'next/image';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [clickedImage, setClickedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    // const { setLoading } = useContext(ProjectContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        // Fetch the JSON data from the public folder
        fetch('/package-category.json')
            .then((response) => response.json())
            .then((data) => {
                setPackages(data);
                setSelectedPackages(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [setLoading]);

    const handleClick = (item) => {
        console.log(item, "38");
        // console.log(id,"38",item);
        router.push({
            pathname: `/show-package/${item.id}`,
            query: { item: item }
        }, `/show-package/${item.id}`)
        // (`/show-package/${item.id}`);
    };

    const handleSearch = () => {
        const filteredPackages = packages.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSelectedPackages(filteredPackages);
    };

    return (
        <div>
            <div className='container py-24 mx-auto text-center'>
                <h1 className='text-center text-3xl font-bold mt-20 text-primary'>Discover Our Photography Packages</h1>
                <p className='mt-5 mx-auto max-w-2xl opacity-60 mb-10'>
                    At LoveLife Memories, we are dedicated to preserving your special moments with our photography packages. Explore a range of options, from our standard and elite services to captivating storytelling and female photography. Choose the package that suits your vision, and let us create lasting memories together. Our photographers are driven by love and passion, ensuring each detail is beautifully captured.
                </p>
                <div className='join'>
                    <input
                        className='input input-bordered join-item'
                        placeholder='Search by name'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className='btn join-item rounded-r-full bg-neutral text-white' onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {selectedPackages.map((item, index) => (
                        <ShowPackageCat key={index} item={item} handleClick={handleClick} />
                    ))}
                </div>

                {clickedImage && (
                    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50'>
                        <div className='max-w-3xl w-1/2 p-5 bg-white rounded-lg relative'>
                            <Image
                                width={400}
                                height={850}
                                src={clickedImage}
                                alt=''
                                className='w-full mx-auto' />
                            <button
                                onClick={() => setClickedImage(null)}
                                className='absolute top-2 right-2 text-xl cursor-pointer text-black'
                            >
                                <ImCross />
                            </button>
                        </div>
                    </div>
                )}

                <div className='mt-10 text-2xl font-semibold text-primary'>
                    Ready to capture your special moments?
                </div>
                <p className='opacity-60 max-w-xl mx-auto mt-3'>
                    Contact us today to book your photography session and create beautiful memories that last a lifetime.
                </p>
            </div>
            <FAQ />
        </div>
    );
};

export default Packages;
