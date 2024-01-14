import { useLocation } from 'react-router-dom';
import PackageById from '../../Component/Package/PackageById';

const ShowPackageByID = () => {
    const location = useLocation();
    console.log(location)
    const item = location; // Access the 'item' from location.state
    console.log(item)
    return (
        <>
            <div className=''>
                <h1 className="text-center text-3xl font-bold pt-20 lg:pt-48 pb-10 text-primary">{item.name} Packages</h1>
                <div className='mx-2 lg:mx-10'>
                {
                    <PackageById item={item}></PackageById>
                }
            </div>
            </div>
        </>
    );
};

export default ShowPackageByID;
