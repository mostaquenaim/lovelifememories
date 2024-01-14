import { useEffect, useState } from 'react';
import ShowPackage from '../../Component/Package/ShowPackage';
import { useContext } from 'react';
import { ProjectContext } from '../../Component/Context/Provider';

const TempPackages = () => {
    const [packages, setPackages] = useState([]);

    const {loading, setLoading} = useContext(ProjectContext)
    
    useEffect(() => {
        setLoading(true)
        // Fetch the JSON data from the public folder
        fetch('/packages.json')
            .then((response) => response.json())
            .then((data) => setPackages(data))
            .catch((error) => console.error('Error fetching data:', error));

        setLoading(false)

    }, [setLoading]);

    return (
        <div>
            <div className='container py-24 mx-auto text-center'>
                <h1 className='text-center text-3xl font-bold mt-20'>Our Packages</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5'>
                    {packages.map((item, index) => (
                        <ShowPackage key={index} item={item} />
                    ))}
                </div>
                <button className='
                btn bg-neutral opacity-50 my-5 text-base-100 
                transition ease-in-out 
                hover:bg-neutral hover:text-base-100 hover:opacity-100
                hover:-translate-y-1 hover:scale-110 
                
                duration-300'>See more details</button>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default TempPackages;