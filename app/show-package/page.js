'use client'
import PackageById from "@/app/components/Package/PackageById";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

// export async function generateStaticParams() {
//     const posts = await fetch('/public/package-category.json').then((res) => res.json())

//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }

const ShowPackageByID = () => {

    // return (
    //     <>
    //     </>
    // )

    // const param = useParams()
    // console.log(param);

    const [selectedPackage, setSelectedPackage] = useState(null)

    // useEffect(() => {
    //     // Fetch the JSON data from the public folder
    //     fetch('/package-category.json')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const res = data.find((item) => item.id == param.id)
    //             setSelectedPackage(res);
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //             setLoading(false);
    //         });
    // }, [param.id]);

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedItem = localStorage.getItem('selectedItem');

        if (storedItem) {
            setError('')
            setLoading(false)
            const parsedItem = JSON.parse(storedItem);
            setSelectedPackage(parsedItem);
        }

        else {
            setError('No package found')
            setLoading(false)
        }

    }, [])

    return (
        <>
            {
                loading ?
                    <span className="loading loading-spinner loading-lg"></span>
                    :
                    error ?
                        <p className="min-h-screen w-full items-center text-center justify-center text-3xl text-primary">No package found
                            <br></br>
                            <span className="text-xl opacity-70"> Please go to <Link href={`/packages`}>Packages</Link> page and select a package to view details </span>
                        </p>
                        :
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
