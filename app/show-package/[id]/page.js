'use client'
import PackageById from "@/app/components/Package/PackageById";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

const ShowPackageByID = () => {
    const param = useParams()
    console.log(param);

    const [selectedPackage, setSelectedPackage] = useState(null)

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/package-category.json')
            .then((response) => response.json())
            .then((data) => {
                const res = data.find((item) => item.id == param.id)
                setSelectedPackage(res);
                console.log(res);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [param.id]);

    return (
        <>
            {
                selectedPackage &&
                <div className=''>
                    <h1 className="text-center text-3xl font-bold pt-20 lg:pt-48 pb-10 text-primary">{selectedPackage.name} Packages</h1>

                    <div className='mx-2 lg:mx-10'>
                        {
                            <PackageById item={selectedPackage}></PackageById>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default ShowPackageByID;
